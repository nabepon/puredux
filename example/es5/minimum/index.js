// Pureduxを継承したコンポーネントを作成
var Component = Puredux.Component.extend({
  initialize: function(){
    this.Actions = {
      increment: function(){
        return {type: 'INCREMENT'};
      }
    };
  },
  template: function() {
    return '<div class="count"><%= count %></div>';
  },
  render: function(props) {
    this.renderTemplate(props);
  },
  onClick: function(e) {
    this.actions.increment();
  },
});

// Reduxのstoreを作成、dispachをsetConfigで渡す
function myReducer(state, { type }) {
  if(!state){
    state = {count: 0};
  }
  if(type === 'INCREMENT'){
    return {
      count: state.count + 1
    };
  }
  return state;
}
var store = Redux.createStore(myReducer);
Puredux.setConfig({dispatch: store.dispatch});

// storeをsubscribeしてレンダリングされるようにする
var component = new Component();
store.subscribe(function(){ component.render(store.getState()) });

// コンポーネントの初回レンダリングを行う
component.render(store.getState());
document.querySelector('#app').appendChild( component.el );
