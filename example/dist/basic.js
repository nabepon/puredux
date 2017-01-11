webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(6);


/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _redux = __webpack_require__(7);
	
	var _reducer = __webpack_require__(29);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _Component = __webpack_require__(31);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _src = __webpack_require__(1);
	
	var Puredux = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	  function App() {
	    var _this = this;
	
	    _classCallCheck(this, App);
	
	    this.store = (0, _redux.createStore)(_reducer2['default'], {});
	    Puredux.setConfig({ dispatch: this.store.dispatch });
	    this.el = document.querySelector('#app');
	    this.component = { render: function render() {}, unmount: function unmount() {} };
	    this.unsubscribe = this.store.subscribe(function () {
	      return _this.render();
	    });
	  }
	
	  _createClass(App, [{
	    key: 'changePage',
	    value: function changePage(pageComponent, renderPage) {
	      var prevComponent = this.component;
	      this.render = renderPage;
	      this.component = pageComponent;
	      this.render();
	      prevComponent.unmount();
	      this.el.appendChild(this.component.el);
	    }
	  }, {
	    key: 'counterPage',
	    value: function counterPage() {
	      var _this2 = this;
	
	      this.changePage(new _Component2['default'](), function () {
	        _this2.component.render(_this2.store.getState().counter);
	      });
	    }
	  }]);
	
	  return App;
	}();
	
	exports['default'] = App;
	
	
	window.app = new App();

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(7);
	
	var _Actions = __webpack_require__(30);
	
	var _Actions2 = _interopRequireDefault(_Actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = (0, _redux.combineReducers)({
	  counter: _Actions2['default']
	});

/***/ },

/***/ 30:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.increment = increment;
	exports.decrement = decrement;
	exports['default'] = reducer;
	/******************************************
	 * 定数
	 ******************************************/
	var INCREMENT = 'INCREMENT';
	var DECREMENT = 'DECREMENT';
	
	/******************************************
	 * Actions
	 ******************************************/
	function increment(current) {
	  return {
	    type: INCREMENT,
	    payload: {
	      count: current + 1
	    }
	  };
	}
	
	function decrement(current) {
	  return {
	    type: DECREMENT,
	    payload: {
	      count: current - 1
	    }
	  };
	}
	
	/******************************************
	 * 初期値
	 ******************************************/
	var initialState = {
	  count: 0
	};
	
	/******************************************
	 * reducer
	 ******************************************/
	function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var _ref = arguments[1];
	  var type = _ref.type,
	      payload = _ref.payload;
	
	  switch (type) {
	    case INCREMENT:
	      return _extends({}, state, payload);
	
	    case DECREMENT:
	      return _extends({}, state, payload);
	
	    default:
	      return state;
	  }
	};

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _src = __webpack_require__(1);
	
	var Puredux = _interopRequireWildcard(_src);
	
	var _Child = __webpack_require__(32);
	
	var _Child2 = _interopRequireDefault(_Child);
	
	var _Actions = __webpack_require__(30);
	
	var Actions = _interopRequireWildcard(_Actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component = function (_Puredux$Component) {
	  _inherits(Component, _Puredux$Component);
	
	  function Component() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Component);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Component.__proto__ || Object.getPrototypeOf(Component)).call.apply(_ref, [this].concat(args))), _this), _this.Actions = Actions, _this.tagName = 'div', _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Component, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      var props = this.props;
	      if (Puredux.hasClass(e, "js-increment")) {
	        this.actions.increment(props.count);
	      }
	      if (Puredux.hasClass(e, "js-decrement")) {
	        this.actions.decrement(props.count);
	      }
	    }
	  }, {
	    key: 'attachChildren',
	    value: function attachChildren() {
	      return {
	        child: new _Child2['default'](),
	        list: [].concat(_toConsumableArray(new Array(5))).map(function () {
	          return new _Child2['default']();
	        })
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render(props) {
	      this.renderTemplate(props);
	      this.children.child.render(props);
	      this.children.list.map(function (item) {
	        return item.render(props);
	      });
	      this.replaceChildren();
	    }
	  }, {
	    key: 'template',
	    value: function template() {
	      return '\n      <div class="count"><%= count %></div>\n      <button class="js-increment">increment</button>\n      <button class="js-decrement">decrement</button>\n      <i data-replace="child"></i>\n      <% for(var i=0; i<5; i++){ %>\n        <i data-replace="list[<%- i %>]"></i>\n      <% } %>\n    ';
	    }
	  }]);
	
	  return Component;
	}(Puredux.Component);
	
	exports['default'] = Component;

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _src = __webpack_require__(1);
	
	var Puredux = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Child = function (_Puredux$Component) {
	  _inherits(Child, _Puredux$Component);
	
	  function Child() {
	    _classCallCheck(this, Child);
	
	    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this));
	
	    _this.tagName = 'span';
	
	    _this.createInstanceRef(Child);
	    return _this;
	  }
	
	  _createClass(Child, [{
	    key: 'template',
	    value: function template() {
	      return '\n      <div class="count"><%= count %></div>\n    ';
	    }
	  }]);
	
	  return Child;
	}(Puredux.Component);
	
	exports['default'] = Child;

/***/ }

});
//# sourceMappingURL=basic.js.map