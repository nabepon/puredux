/******************************************
 * 定数
 ******************************************/
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/******************************************
 * Actions
 ******************************************/
export function increment(current) {
  return {
    type: INCREMENT,
    payload: {
      count: current + 1
    },
  }
}

export function decrement(current) {
  return {
    type: DECREMENT,
    payload: {
      count: current - 1
    },
  }
}

/******************************************
 * 初期値
 ******************************************/
const initialState = {
  count: 0
};

/******************************************
 * reducer
 ******************************************/
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        ...payload
      };

    case DECREMENT:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
