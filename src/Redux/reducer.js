import * as actions from "./actionTypes";

let lastId = 0;
let initialState = [];

export default function reducer(state = initialState, action ) {
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === actions.BUG_REMOVED)
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  else if (action.type === actions.SOMETHING )
    state = [];
  return state;
}
