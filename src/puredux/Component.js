import {mapDispatchToActions, shouldComponentUpdate, recurseObject} from './utils';

export default class Component {
  constructor(dispatch, option) {
    this.isPureduxComponent = true;
    this.dispatch = dispatch || function(){};
    this.el = document.createElement(option && option.tagName || this.tagName);
    this.isFirstRender = true;
    this.initialProps = null;
    this.onClick = this.onClick.bind(this)
  }

  tagName = 'div';
  Actions = {};
  actions = null;
  renderChildrenDependsOnParent = false;
  children = {};
  props = null;
  shouldComponentUpdate = shouldComponentUpdate;
  componentWillMount() {}
  componentWillUpdate() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  onClick() {}
  attachChildren() {}
  renderChildren() {}
  appendChildren() {}
  renderSelf() {}

  swapElement(selector, el) {
    const target = this.el.querySelector(selector);
    target.parentNode.insertBefore(el, target);
    this.el.removeChild(target);
  }

  render(nextProps) {
    if(this.isFirstRender){
      this.initialProps = this.props;
    }
    this.prevProps = this.props;
    this.props = nextProps;

    if(this.isFirstRender){
      this.componentWillMount(this.prevProps, nextProps);
      this.mount();
    }
    this.componentWillUpdate(this.prevProps, nextProps);

    if(!this.renderChildrenDependsOnParent){
      this.renderChildren();
    }

    if(this.isFirstRender || this.shouldComponentUpdate(this.prevProps, nextProps)){
      if(this.renderChildrenDependsOnParent){
        this.renderChildren();
      }
      this.isFirstRender = false;
      this.renderSelf(nextProps);
      this.appendChildren();
    }

    if(this.isFirstRender){
      this.componentDidMount();
    }
    this.componentDidUpdate();

    return this;
  }

  mount() {
    this.el.addEventListener('click', this.onClick, false);
    this.actions = mapDispatchToActions(this.dispatch, this.Actions);
    this.children = {};
    this.attachChildren();
    recurseObject(this.children, obj => obj.isPureduxComponent, obj => {
      obj.dispatch = this.dispatch;
      return obj
    });
    return this;
  }

  unmount() {
    this.el.parentNode.removeChild(this.el);
    this.componentWillUnmount(this.prevProps, this.props);
    recurseObject(this.children, obj => obj.isPureduxComponent, obj => {
      obj.mount();
      return obj;
    });
    this.el.removeEventListener('click', this.onClick, false);
    this.actions = null;
    this.children = null;
    this.props = this.initialProps;
    this.isFirstRender = true;
    return this;
  }
}
