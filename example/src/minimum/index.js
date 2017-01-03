import { createStore } from 'redux';
import * as Puredux from '../../../src';

// Pureduxを継承したコンポーネントを作成
class Component extends Puredux.Component {
  template() {
    return '<div class="count"><%= count %></div>';
  }
  render(props) {
    this.renderTemplate(props);
  }
  Actions = {
    increment: ()=>({type: 'INCREMENT'})
  };
  onClick(e) {
    this.actions.increment();
  }
}

// Reduxのstoreを作成、dispachをsetConfigで渡す
function myReducer(state = {count: 0}, { type }) {
  if(type === 'INCREMENT'){
    return {
      count: state.count + 1
    };
  }
  return state;
}
const store = createStore(myReducer);
Puredux.setConfig({dispatch: store.dispatch});

// storeをsubscribeしてレンダリングされるようにする
const component = new Component();
store.subscribe(()=>component.render(store.getState()));

// コンポーネントの初回レンダリングを行う
component.render(store.getState());
document.querySelector('#app').appendChild( component.el );
