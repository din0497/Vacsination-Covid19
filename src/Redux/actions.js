import { BUG_ADDED, BUG_REMOVED, RESOLVED } from "./actionTypes";

export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugRemoved = (id) => ({
  type: BUG_REMOVED,
  payload: {
    id: id,
  },
});
export const bugResolved = (id) => ({
  type: RESOLVED,
  payload: {
    id: id,
  },
});
