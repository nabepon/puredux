import PureduxComponent from './puredux/Component';

export default class Child extends PureduxComponent {

  tagName = 'span';

  renderSelf(props) {
    this.el.innerHTML = `
      <div>child: ${props.count}</div>
    `;
  }
}
