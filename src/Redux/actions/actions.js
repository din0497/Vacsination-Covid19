import { DATA, TOOLTIP } from "./actionTypes";

export const fetchData = (data) => ({
  type: DATA,
  payload: {
    data: data,
  },
});

export const getTooltip = (name) => ({
  type: TOOLTIP,
  payload: {
    tooltip: name,
  },
});
