import * as types from "./actions/actionTypes";
const initial = {
  data: {},
  all: [],
  allV: [],
  singleV: {},
  tooltip: "",
};

export default function reducer(state = initial, action) {
  if (action.type === types.SINGLE)
    return {
      ...state,
      data: action.payload.data,
      isLoading: action.payload.isLoading,
    };

  if (action.type === types.ALL)
    return {
      ...state,
      all: action.payload.all,
      isLoading: action.payload.isLoading,
    };

  if (action.type === types.ALL_V)
    return {
      ...state,
      allV: action.payload.allV,
      isLoading: action.payload.isLoading,
    };
  if (action.type === types.SINGLE_V)
    return {
      ...state,
      singleV: action.payload.allV,
      isLoading: action.payload.isLoading,
    };

  if (action.type === types.TOOLTIP)
    return { ...state, tooltip: action.payload.tooltip };
  return state;
}
