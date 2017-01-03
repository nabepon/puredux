webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(33);


/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _redux = __webpack_require__(7);
	
	var _src = __webpack_require__(1);
	
	var Puredux = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Pureduxを継承したコンポーネントを作成
	var Component = function (_Puredux$Component) {
	  _inherits(Component, _Puredux$Component);
	
	  function Component() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Component);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Component.__proto__ || Object.getPrototypeOf(Component)).call.apply(_ref, [this].concat(args))), _this), _this.Actions = {
	      increment: function increment() {
	        return { type: 'INCREMENT' };
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Component, [{
	    key: 'template',
	    value: function template() {
	      return '<div class="count"><%= count %></div>';
	    }
	  }, {
	    key: 'render',
	    value: function render(props) {
	      this.renderTemplate(props);
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      this.actions.increment();
	    }
	  }]);
	
	  return Component;
	}(Puredux.Component);
	
	// Reduxのstoreを作成、dispachをsetConfigで渡す
	
	
	function myReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0 };
	  var _ref2 = arguments[1];
	  var type = _ref2.type;
	
	  if (type === 'INCREMENT') {
	    return {
	      count: state.count + 1
	    };
	  }
	  return state;
	}
	var store = (0, _redux.createStore)(myReducer);
	Puredux.setConfig({ dispatch: store.dispatch });
	
	// storeをsubscribeしてレンダリングされるようにする
	var component = new Component();
	store.subscribe(function () {
	  return component.render(store.getState());
	});
	
	// コンポーネントの初回レンダリングを行う
	component.render(store.getState());
	document.querySelector('#app').appendChild(component.el);

/***/ }

});
//# sourceMappingURL=minimum.js.map