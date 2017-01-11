## Overview
Reactライク、7kb、ReduxのためのView。  
Reduxを使うには「stateが更新されたら、viewを更新する」この仕組みがあれば十分です。  
より純粋に、ES5でもReduxプロジェクトを始めることができる。  
Pureduxは、この達成のために作りました。  

JSXやVirtualDOM、複雑なコンパイラ、巨大なランタイムは不要です。  
ピュアなJSと、ピュアなReduxで、ピュアなfluxを始めることができます。  


## Background
**Reduxを使う**にはReactやVue、Riotなどの**Viewが必要**になります。  
しかしReduxのためにこれらを使うにはどれも**大げさすぎ**ますし、SPAにしないと**容量も大きすぎ**ます。        
ファイルをコンパイルする環境が必要ですし、学習コストも多くなってしまう。  
こういった理由から、**いまだにjQuery**を採用するプロジェクトを見かけることがあります。    

私は、こういったプロジェクトを何とかしたいと感じました。  
理由は、**Fluxは廃れない**と思いますが、ReactやVueは**ただのViewなのでいつ廃れてもおかしくありません。**  
つまり、未来への投資としてFluxは学ぶべきだが、Reactに学習コストを割かなくても良いと思っています。    
しかしながら、Reduxを学ぶにはReactを学ばなければいけません。  
ここに問題を感じています。    

jQueryから最新のWeb開発へ移行できない理由は、**あまりにも破壊的すぎる**ことです。  
しかも、その破壊さの原因はReactに起因しています。  
ただReduxを採用するだけであれば、大げさな開発環境は必要としません。  
もっと気軽にjQueryから移行したり、jQueryを併用したプロジェクトにすることができます。    

MVCからReactiveプログラミングへ移行したいが移行できずにくすぶっている、  
そんな開発者にPureduxが助けになれればと思っています。

## Installation
```
npm install --save puredux
```

## Usage

[minimum/index.js](https://github.com/nabepon/puredux/blob/master/example/es5/minimum/index.js)

1. **create your component**  
Pureduxを継承したコンポーネントを作成。
```js
var Component = Puredux.Component.extend({
  initialize: function(){
    this.Actions = {
      increment: function(){
        return {type: 'INCREMENT'}; 
      }
    };
  },
  template: function() {
    return '<div class="count"><%= count %></div>';
  },
  render: function(props) {
    this.renderTemplate(props);
  },
  onClick: function(e) {
    this.actions.increment();
  },
});
```

2. **set dispatch**  
ReduxのdispatchをsetConfigで設定。  
```js
function myReducer(state, { type }) {
  if(!state){
    state = {count: 0};
  }
  if(type === 'INCREMENT'){
    return {
      count: state.count + 1
    };
  }
  return state;
}
var store = Redux.createStore(myReducer);
Puredux.setConfig({dispatch: store.dispatch});
```

3. **subscribe**  
store.subscribeでレンダリングされるようにする。  
```js
var component = new Component();
store.subscribe(function(){ component.render(store.getState()) });
```

4. **render**  
コンポーネントの初回レンダリングを行う。  
```js
component.render(store.getState());
document.querySelector('#app').appendChild( component.el );
```

## API
srcのコメントを参照してください。  
[src/Component.js](https://github.com/nabepon/puredux/blob/master/src/Component.js)

## Example

es2015
* [examples](https://github.com/nabepon/puredux/tree/master/example/src)
* [demo](https://nabepon.github.io/puredux/example/)

es5
* [examples](https://github.com/nabepon/puredux/tree/master/example/es5)
* [demo](https://nabepon.github.io/puredux/example/es5/)

## Required
Reduxが必要になりますが、Reduxを使用せずに利用することもできます。  
[example/src/unusedRedux](https://github.com/nabepon/puredux/tree/master/example/src/unusedRedux)





