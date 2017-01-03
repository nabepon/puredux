import * as Puredux from '../../../src';
import Child from './Child';
import * as Actions from './Actions';

export default class Component extends Puredux.Component {

  Actions = Actions;
  tagName = 'div';

  onClick(e) {
    const props = this.props;
    if(Puredux.hasClass(e, "js-increment")){
      this.actions.increment(props.count);
    }
    if(Puredux.hasClass(e, "js-decrement")){
      this.actions.decrement(props.count);
    }
  }

  attachChildren() {
    return {
      child: new Child(),
      list: [...new Array(5)].map(() => new Child()),
    };
  }

  render(props) {
    this.renderTemplate(props);
    this.$('.child-container').appendChild( this.children.child.render(props).el );
    this.children.list.map(item => {
      this.$('.child-container').appendChild( item.render(props).el );
    });
  }

  template() {
    return `
      <div class="count"><%= count %></div>
      <button class="js-increment">increment</button>
      <button class="js-decrement">decrement</button>
      <div class="child-container"></div>
    `;
  }

}
