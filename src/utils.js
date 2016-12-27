const ObjectKeys = Object.keys;

export function mapDispatchToActions(dispatch, actions){
  const ret = {};
  ObjectKeys(actions).map((key)=>{
    if (typeof actions[key] === 'function') {
      ret[key] = function(){
        dispatch(actions[key].apply(null, arguments));
      };
    }
  });
  return ret;
}

export function shouldComponentUpdate(objA, objB){
  return !recurseEqual(objA, objB, 1);
}

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

export function swapElement(selfEl, selector, el) {
  const target = selfEl.querySelector(selector);
  if(target) {
    target.parentNode.insertBefore(el, target);
    selfEl.removeChild(target);
  }
}
