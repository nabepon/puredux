import * as Puredux from '../../src';

export default class Child extends Puredux.Component {

  tagName = 'span';

  renderSelf(props) {
    this.el.innerHTML = `
      <div>child: ${props.count}</div>
    `;
  }
}
