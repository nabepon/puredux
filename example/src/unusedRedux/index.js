import Component from './Component';
import * as Puredux from '../../../src';

function Store(){
  this.getState = ()=>{
    return this.state;
  };
  this.state = {
    counter: {
      count: 0
    }
  };
}

export default class App {
  constructor(){
    const _this = this;
    this.store = new Store();
    Puredux.setConfig({dispatcher: function(action){
      return function(){
        action.apply({getState: _this.store.getState.bind(_this)}, arguments);
        _this.render();
      }
    }});
    this.el = document.querySelector('#app');
    this.component = {render: ()=>{}, unmount: ()=>{}};
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
