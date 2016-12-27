import Component from './Component';

function PureduxComponent(option, config){
  Object.assign(this, new Component(option), config || {});
}

PureduxComponent.prototype.__proto__ = Component.prototype;

export default function createComponent(option, config, initialize){
  const instance = new PureduxComponent(option, config);
  if(initialize){
    initialize.call(instance, option, config);
  }
  return instance;
}
