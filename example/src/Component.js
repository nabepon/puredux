import * as Puredux from '../../src';
import Child from './Child';
import {hasClass} from './utils';
import * as Actions from './Actions';

export default class Component extends Puredux.Component {

  Actions = Actions;
  tagName = 'div';

  onClick(e) {
    const props = this.props;
    if(hasClass(e, "js-increment")){
      this.actions.increment(props.count);
    }
    if(hasClass(e, "js-decrement")){
      this.actions.decrement(props.count);
    }
  }

  attachChildren(props) {
    return {
      child: new Child(),
      list: [...Array(5)].map(() => new Child()),
    };
  }

  updateRender(props) {
    this.el.innerHTML = this.template(props);
    this.$('.child-container').appendChild( this.children.child.render(props).el );
    this.children.list.map(item => {
      this.$('.child-container').appendChild( item.render(props).el );
    });
  }

  createTemplate() {
    return `
      <div class="count"><%= count %></div>
      <button class="js-increment">increment</button>
      <button class="js-decrement">decrement</button>
      <div class="child-container"></div>
    `;
  }

}
