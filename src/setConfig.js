import Component from './Component';

export default function setConfig(config){
  if(config.dispatch){
    Component.prototype.dispatch = config.dispatch;
  }
}
