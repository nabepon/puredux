import createTemplate from './createTemplate';
import {mapDispatchToActions, shouldComponentUpdate, recurseObject} from './utils';

export default class Component {
  constructor(option) {
    const _this = this;
    _this.isPureduxComponent = true;
    _this.el = document.createElement(option && option.tagName || _this.tagName);
    _this.option = option;
    _this.__isMountRender = true;
    _this.onClick = _this.onClick ? _this.onClick.bind(_this) : null;
    _this.renderSuper = _this.render;
    return _this;
  }

  createInstanceRef(Target){
    const _this = this;
    if (typeof Target.instance === "object"){
      _this.instance = Target.instance;
    }else{
      Target.instance = _this;
    }
  }

  tagName = 'div';
  Actions = {};
  actions = null;
  option = null;
  children = null;
  state = {};
  props = null;
  prevProps = null;
  enableThisReference = false;
  renderChildrenDependsOnParent = false;
  shouldComponentUpdate = shouldComponentUpdate;
  componentWillMount() {}
  componentWillUpdate() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  attachChildren() {}
  noop(){}

  templateCache = null;
  createTemplate(){}
  template(props) {
    const _this = this.instance || this;

    if(!_this.templateCache){
      const templateCache = _this.createTemplate(props);
      const type = typeof templateCache;

      if(type === 'function'){
        _this.templateCache = templateCache;
      }else if(type === 'string'){
        _this.templateCache = createTemplate(templateCache);
      }else{
        _this.templateCache = createTemplate('');
      }
    }
    return _this.templateCache(props);
  }

  $(selector){
    return this.el.querySelector(selector);
  };

  updateRender() {
    const _this = this;
    _this.el.innerHTML = _this.template(...arguments);
    return _this;
  }

  render(nextProps) {
    const _this = this;
    const isMountRender = _this.__isMountRender;
    const prevProps = _this.prevProps;
    _this.prevProps = prevProps;
    _this.props = nextProps;

    if(isMountRender){
      if(_this.onClick){
        _this.el.addEventListener('click', _this.onClick, false);
      }
      _this.actions = mapDispatchToActions(_this.dispatch || _this.noop, _this.Actions);
      _this.children = _this.attachChildren(nextProps) || {};
      _this.componentWillMount();
    }
    _this.componentWillUpdate(isMountRender);

    if(isMountRender || _this.shouldComponentUpdate(prevProps, nextProps)){
      _this.__isMountRender = false;
      _this.updateRender(nextProps);
    }

    if(isMountRender){
      _this.componentDidMount();
    }
    _this.componentDidUpdate(isMountRender);

    return _this;
  }

  unmount() {
    const _this = this;
    _this.el.parentNode.removeChild(_this.el);
    _this.componentWillUnmount();
    recurseObject(_this.children, obj => obj.isPureduxComponent, obj => {
      obj.unmount();
      return obj;
    });
    if(_this.onClick){
      _this.el.removeEventListener('click', _this.onClick, false);
    }
    _this.actions = null;
    _this.children = null;
    _this.props = null;
    _this.prevProps = null;
    _this.state = {};
    _this.__isMountRender = true;
    return _this;
  }
}
