var utils = (function(){
  var hasClass = function(e, name){
    return e.target.classList.contains(name);
  };

  return {
    hasClass: hasClass
  }
})();


/******************************************
 * Child
 ******************************************/
var Child = Puredux.Component.extend({
  initialize: function(){
    this.tagName = 'span';
  },

  createTemplate: function() {
    return `
      <div class="count"><%= count %></div>
    `
  },
});


/******************************************
 * Component
 ******************************************/
var Component = Puredux.Component.extend({
  initialize: function(){
    this.Actions = Actions;
    this.tagName = 'span';
  },

  onClick: function(e){
    const props = this.props;
    if(utils.hasClass(e, "js-increment")){
      this.actions.increment(props.count);
    }
    if(utils.hasClass(e, "js-decrement")){
      this.actions.decrement(props.count);
    }
  },

  attachChildren: function(props) {
    return {
      child: new Child()
    };
  },

  updateRender: function(props) {
    this.el.innerHTML = this.template(props);
    this.$('.child-container').appendChild( this.children.child.render(props).el );
    for(let i=0; i<10; i++){
      this.$('.child-container').appendChild( new Child().render(props).el );
    }
  },

  createTemplate: function() {
    return `
        <div class="count"><%= count %></div>
        <button class="js-increment">increment</button>
        <button class="js-decrement">decrement</button>
        <div class="child-container"></div>
      `;
  },
});


/******************************************
 * Actions
 ******************************************/
var Actions = (function(){

  //-----------------------------------------
  // Constant
  //-----------------------------------------
  var INCREMENT = 'INCREMENT';
  var DECREMENT = 'DECREMENT';

  //-----------------------------------------
  // ActionCreators
  //-----------------------------------------
  var increment = function(current) {
    return {
      type: INCREMENT,
      payload: {
        count: current + 1
      },
    }
  };

  var decrement = function(current) {
    return {
      type: DECREMENT,
      payload: {
        count: current - 1
      },
    }
  };

  //-----------------------------------------
  // Initial
  //-----------------------------------------
  var initialState = {
    count: 0
  };

  //-----------------------------------------
  // Reducer
  //-----------------------------------------
  var reducer = function(state, action) {
    if(!state){
      state = initialState;
    }
    var type = action.type;
    var payload = action.payload;

    switch (type) {
      case INCREMENT:
        return Object.assign({}, state, payload);

      case DECREMENT:
        return Object.assign({}, state, payload);

      default:
        return state;
    }
  };

  return {
    increment: increment,
    decrement: decrement,
    reducer: reducer,
  };
})();


/******************************************
 * reducer
 ******************************************/
var reducer = (function(){
  return Redux.combineReducers({
    counter: Actions.reducer,
  });
})();


/******************************************
 * App
 ******************************************/
var App = (function(){
  var Class = function(){ this.init.apply(this, arguments) };

  Class.prototype = {
    init: function(){
      const _this = this;
      this.store = Redux.createStore(reducer, {});
      Puredux.setConfig({dispatch: this.store.dispatch});
      this.el = document.querySelector('#app');
      this.component = {render: function(){}, unmount: function(){}};
      this.unsubscribe = this.store.subscribe(function(){ _this.render() });
    },

    changePage: function(pageComponent, renderPage) {
      const prevComponent = this.component;
      this.render = renderPage;
      this.component = pageComponent;
      this.render();
      prevComponent.unmount();
      this.el.appendChild(this.component.el);
    },

    counterPage: function(){
      this.changePage(new Component(), ()=>{
        this.component.render(this.store.getState().counter);
      });
    }
  };

  return Class;
})();

var app = new App();
