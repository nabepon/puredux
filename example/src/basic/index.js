import { createStore } from 'redux';
import reducer from './reducer';
import Component from './Component';
import * as Puredux from '../../../src';

export default class App {
  constructor(){
    this.store = createStore(reducer, {});
    Puredux.setConfig({dispatch: this.store.dispatch});
    this.el = document.querySelector('#app');
    this.component = {render: ()=>{}, unmount: ()=>{}};
    this.unsubscribe = this.store.subscribe(()=>this.render());
  }

  changePage(pageComponent, renderPage) {
    const prevComponent = this.component;
    this.render = renderPage;
    this.component = pageComponent;
    this.render();
    prevComponent.unmount();
    this.el.appendChild(this.component.el);
  }

  counterPage(){
    this.changePage(new Component(), ()=>{
      this.component.render(this.store.getState().counter);
    });
  }
}

window.app = new App();
