import compileTemplate from './template';
import {bindActionCreators, recurseObject} from './utils';

export default class Component {

  constructor(option) {
    const _this = this;

    // 初期化処理。
    _this.option = option;
    _this.initialize.bind(_this).apply(_this, arguments);
    _this.onClick = _this.onClick ? _this.onClick.bind(_this) : null;
    _this.el = document.createElement(option && option.tagName || _this.tagName || 'div');

    // render乗っ取り。rendererが実行されるようにします。
    _this.updateRender = _this.render;
    _this.render = _this.renderer;

    // 初回実行はtemplateのコンパイルが行われ、2回目以降はキャッシュが使われるようにします。
    _this.updateTemplate = _this.createTemplate;

    return _this;
  }


  /*********************************
   * please override
   ********************************/

  // elementのタグ。
  tagName = 'div';

  // ActionCreatorsを渡します。dispatchと紐づきが行われます。
  Actions = {};

  // unmount時にリセットされる汎用的な入れ物です。
  state = {};

  // 初期化時に呼ばれます。
  initialize() {}

  // 初回レンダリングのみ、render実行前に呼ばれます。
  // 返り値がthis.childrenに追加されます。
  // unmountが呼ばれると、this.childrenに対し再帰的にunmountを実行し掃除します。
  attachChildren() {}

  // 返り値のstringに対し、underscore.jsのtemplateでコンパイルします。
  // functionを返すこともでき、コンパイル済の関数を返せばコンパイル処理を省略できます。
  template() {
    return '';
  }

  // レンダリング毎に呼ばれ、falseを返すとrenderを実行しません。
  // 引数にprevPropsとpropsが渡ります。
  // props比較でレンダリングされないようチューニングするときに使います。
  shouldComponentUpdate() {
    return true;
  }

  // render実行時、DOMを組み立てるのに使用します。
  // shouldComponentUpdateを使わず、render内でもレンダリング実行を制御できます。。
  // 自身は再レンダリングせずに子コンポーネントのみ再レンダリングするなど、細かなチューニングが可能です。
  render(props) {
    this.renderTemplate(props);
  }

  // クリックを処理したいときに上書きしてください。
  // onClick(e) {}

  // 初回レンダリングのみ、render実行前に呼ばれます。
  componentWillMount() {}

  // レンダリング毎に、render実行前に呼ばれます。
  // Reactと違ってmount時にも呼ばれ、this.isFirstRenderで初回かどうか判定できます。
  componentWillUpdate() {}

  // 初回レンダリングのみ、render実行後に呼ばれます。
  componentDidMount() {}

  // レンダリング毎に、render実行後に呼ばれます。
  // Reactと違ってmount時にも呼ばれ、this.isFirstRenderで初回かどうか判定できます。
  componentDidUpdate() {}

  // unmount時に呼ばれます。
  componentWillUnmount() {}



  /*********************************
   * this reference
   ********************************/

  // renderに渡した引数が保持されます。
  props = null;

  // 1つ前のrenderに渡した引数が保持されます。
  prevProps = null;

  // 初回レンダリングかどうかのフラグ
  isFirstRender = true;

  // Actionsをdispatchでラップした関数が保持されます。
  actions = null;

  // attachChildrenの返り値が保持されます。
  children = null;

  // newでインスタンス作成時の引数が保持されます。
  option = null;



  /*********************************
   * util
   ********************************/

  // 自身のinnerHTMLをtemplateで更新します。
  renderTemplate(props) {
    this.el.innerHTML = this.updateTemplate(props);
    return this;
  }

  // querySelectorのエイリアス。
  // this.$(selector) のように使います。
  $(selector){
    return this.el.querySelector(selector);
  };

  // 自身のインスタンスを保存します。
  // initialize、またはconstructorで実行しておくと、
  // templateのコンパイル結果をシェアするようになります。
  createInstanceRef(Target){
    const _this = this;
    if (typeof Target.instance === "object"){
      _this.instance = Target.instance;
    }else{
      Target.instance = _this;
    }
  }

  // DOMを削除するときに呼び出してください。
  // Reactと違って自分でunmountを実行する必要があるため、
  // unmountを明示的に呼ばないとcomponentWillUnmountも実行されません。
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
    _this.isFirstRender = true;
    return _this;
  }


  /*********************************
   * private
   ********************************/

  isPureduxComponent = true;
  templateCache = null;

  createTemplate(props){
    const _this = this.instance || this;
    if(!_this.templateCache){
      const template = _this.template(props);
      _this.templateCache = (typeof template === 'function') ? template : compileTemplate(template);
    }
    _this.updateTemplate = _this.templateCache;
    return _this.templateCache(props);
  }

  renderer(nextProps) {
    const _this = this;
    const isFirstRender = _this.isFirstRender;
    _this.prevProps = _this.props;
    _this.props = nextProps;

    if(isFirstRender){
      if(_this.onClick){
        _this.el.addEventListener('click', _this.onClick, false);
      }
      _this.actions = bindActionCreators(_this.dispatch, _this.dispatcher, _this.Actions);
      _this.children = _this.attachChildren(nextProps) || {};
      _this.componentWillMount();
    }
    _this.componentWillUpdate();

    if(isFirstRender || _this.shouldComponentUpdate(_this.prevProps, nextProps)){
      _this.updateRender(...arguments);
    }

    if(isFirstRender){
      _this.componentDidMount();
    }
    _this.componentDidUpdate();

    _this.isFirstRender = false;

    return _this;
  }

}

Component.extend = function extend(config){
  const Class = function(){
    Class.prototype.__proto__ = Component.prototype;
    Component.apply(this, arguments);
  };
  Class.prototype = config;
  return Class;
};
