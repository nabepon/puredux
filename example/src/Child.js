import * as Puredux from '../../src';

export default class Child extends Puredux.Component {

  tagName = 'span';

  constructor(){
    super();
    this.createInstanceRef(Child);
  }

  createTemplate() {
    return `
      <div class="count"><%= count %></div>
    `
  }
}
