export function mapDispatchToActions(dispatch, actions){
  const ret = {};
  Object.keys(actions).map((key)=>{
    const action = actions[key];
    if (typeof action === 'function') {
      ret[key] = function(){
        dispatch(action.apply(undefined, arguments));
      };
    }
  });
  return ret;
}

function isObject(target) {
  return target !== null && typeof target === 'object' && !Array.isArray(target);
}

function diffKey(keys1, keys2){
  return false;
  for(const i in keys1){
    if(!keys2.includes( keys1[i] )){
      return true
    }
  }
}

function diffProp(keys, beginProps, currentProps){
  for(const i in keys){
    if(beginProps[keys[i]] !== currentProps[keys[i]]){
      return true;
    }
  }
  return false;
}

export function shouldComponentUpdate(beginProps, currentProps){
  if(!isObject(beginProps) || !isObject(currentProps)){
    return beginProps === currentProps;
  }

  const beginKeys = Object.keys(beginProps);
  const currentKeys = Object.keys(currentProps);
  if(
    diffKey(beginKeys, currentKeys) ||
    diffKey(currentKeys, beginKeys) ||
    diffProp(beginKeys, beginProps, currentProps)
  ){
    return true
  }

  return false;
}

export function recurseObject(obj, checkObj, iteratee){
  if(obj === null || typeof obj !== 'object'){
    return iteratee(obj);
  }

  if(Array.isArray(obj)){
    return obj.map(item => recurseObject(obj, checkObj, iteratee))
  }

  Object.keys(obj).map(key => {
    if(checkObj && checkObj(obj[key])){
      obj[key] = iteratee(obj[key]);
    }else{
      recurseObject(obj[key], checkObj, iteratee);
    }
  });

  return obj;
}
