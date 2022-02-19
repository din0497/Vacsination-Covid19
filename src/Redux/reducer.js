import * as types from "./actions/actionTypes";
const initial = {
  data: [],
  tooltip: "",
};
export default function reducer(state = initial, action) {
  if (action.type === types.DATA)
    return {
      ...state,
      data: action.payload.data,
    };
  if (action.type === types.TOOLTIP)
    return { ...state, tooltip: action.payload.tooltip };
  return state;
}
