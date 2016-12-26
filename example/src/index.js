import { createStore } from 'redux';
import reducer from './reducer';
import Component from './Component';

class App {
  constructor(){
    this.store = createStore(reducer, {});
    this.el = document.querySelector('#app');
    this.component = {render: ()=>{}, unmount: ()=>{}};
    this.unsubscribe = this.store.subscribe(()=>this.render());
  }

  changePage(pageComponent, renderPage) {
    this.component.unmount();
    this.render = renderPage;
    this.component = pageComponent;
    this.render();
    this.el.appendChild(this.component.el);
  }

  counterPage(){
    this.changePage(new Component(this.store.dispatch), ()=>{
      this.component.render(this.store.getState().counter);
    });
  }
}

window.app = new App();
