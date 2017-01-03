/******************************************
 * Child
 ******************************************/
var Child = Puredux.Component.extend({
  initialize: function(){
    this.tagName = 'span';
  },

  template: function() {
    return '\
      <div class="count"><%= count %></div>\
      '
  },
});


/******************************************
 * Component
 ******************************************/
var Component = Puredux.Component.extend({
  initialize: function(){
    this.Actions = Actions;
    this.tagName = 'span';
  },

  onClick: function(e){
    var props = this.props;
    if(Puredux.hasClass(e, "js-increment")){
      this.actions.increment(props.count);
    }
    if(Puredux.hasClass(e, "js-decrement")){
      this.actions.decrement(props.count);
    }
  },

  attachChildren: function() {
    return {
      child: new Child(),
      list: [1,2,3,4,5].map(function(){
        return new Child();
      })
    };
  },

  render: function(props) {
    this.renderTemplate(props);
    this.$('.child-container').appendChild( this.children.child.render(props).el );
    for(var i in this.children.list){
      this.$('.child-container').appendChild( this.children.list[i].render(props).el );
    }
  },

  template: function() {
    return '\
      <div class="count"><%= count %></div>\
      <button class="js-increment">increment</button>\
      <button class="js-decrement">decrement</button>\
      <div class="child-container"></div>\
    ';
  },
});


/******************************************
 * Actions
 ******************************************/
var Actions = (function(){
  var increment = function(current) {
    this.getState().counter.count++;
  };

  var decrement = function(current) {
    this.getState().counter.count--;
  };

  return {
    increment: increment,
    decrement: decrement,
  };
})();


/******************************************
 * App
 ******************************************/
var App = (function(){
  var Class = function(){ this.init.apply(this, arguments) };

  var Store = function(){
    var _this = this;
    this.getState = function(){
      return _this.state;
    };
    this.state = {
      counter: {
        count: 0
      }
    };
  };

  Class.prototype = {
    init: function(){
      var _this = this;
      this.store = new Store();
      Puredux.setConfig({dispatcher: function(action){
        return function(){
          action.apply({getState: _this.store.getState.bind(_this)}, arguments);
          _this.render()
        }
      }});
      this.el = document.querySelector('#app');
      this.component = {render: function(){}, unmount: function(){}};
    },

    changePage: function(pageComponent, renderPage) {
      var prevComponent = this.component;
      this.render = renderPage;
      this.component = pageComponent;
      this.render();
      prevComponent.unmount();
      this.el.appendChild(this.component.el);
    },

    counterPage: function(){
      this.changePage(new Component(), function(){
        this.component.render(this.store.getState().counter);
      });
    }
  };

  return Class;
})();

var app = new App();
