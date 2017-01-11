const ObjectKeys = Object.keys;

export function bindActionCreators(dispatch, dispatcher, actions){
  const ret = {};
  ObjectKeys(actions).map((key)=>{
    if (typeof actions[key] === 'function') {
      ret[key] =
        dispatch ? function(){ return dispatch(actions[key].apply(null, arguments)); }
        : dispatcher ? dispatcher(actions[key])
        : actions[key];
    }
  });
  return ret;
}

export function shallowCompare(objA, objB){
  return !recurseEqual(objA, objB, 1);
}

/**
 * Modified from https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
 */
export function recurseEqual(objA, objB, recurseCount) {
  if(objA === objB){
    return true;
  }

  if(typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null){
    return objA === objB;
  }

  const keysB = ObjectKeys(objB);
  const keysA = ObjectKeys(objA);

  if(keysA.length !== keysB.length){
    return false;
  }

  for(let i = 0; i < keysB.length; i++){
    if(!objA.hasOwnProperty(keysB[i])){
      return false;
    }

    if(recurseCount && !recurseEqual(objA[keysB[i]], objB[keysB[i]], recurseCount - 1)){
      return false;
    }

    if(objA[keysB[i]] !== objB[keysB[i]]){
      return false;
    }
  }

  return true;
}

export function recurseObject(obj, checkObj, iteratee){
  if(typeof obj !== 'object' || obj === null){
    return iteratee(obj);
  }

  ObjectKeys(obj).map(key => {
    if(checkObj && checkObj(obj[key])){
      obj[key] = iteratee(obj[key]);
    }else{
      recurseObject(obj[key], checkObj, iteratee);
    }
  });

  return obj;
}

export function replaceChild(container, selector, el) {
  const target = container.querySelector(selector);
  if(target) {
    container.replaceChild(el, target);
  }
}

export function hasClass(event, name){
  return event.target.classList.contains(name);
}

