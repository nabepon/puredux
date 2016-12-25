import PureduxComponent from './puredux/Component';
import Child from './Child';
import {hasClass} from './utils';
import * as Actions from './Actions';

export default class Component extends PureduxComponent {

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

  attachChildren() {
    this.children = {
      child: new Child(),
    };
  }

  renderChildren() {
    const props = this.props;
    this.children.child.render(props);
  }

  appendChildren() {
    this.swapElement(".child-container", this.children.child.el);
  }

  renderSelf(props) {
    this.el.innerHTML = `
      <div>${props.count}</div>
      <button class="js-increment">increment</button>
      <button class="js-decrement">decrement</button>
      <div class="child-container"></div>
    `;
  }
}
