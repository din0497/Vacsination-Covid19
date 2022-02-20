import { ALL, ALL_V, SINGLE, SINGLE_V, TOOLTIP } from "./actionTypes";

export const fetchData = (data, loading) => ({
  type: SINGLE,
  payload: {
    data: data,
    isLoading: loading
  },
});
export const fetchAll = (data, loading) => ({
  type: ALL,
  payload: {
    all: data,
    isLoading: loading
  },
});

export const fetchAllV = (data, loading) => ({
  type: ALL_V,
  payload: {
    allV: data,
    isLoading: loading
  },
});

export const fetchSingleV = (data, loading) => ({
  type: SINGLE_V,
  payload: {
    singleV: data,
    isLoading: loading
  },
});



export const getTooltip = (name) => ({
  type: TOOLTIP,
  payload: {
    tooltip: name,

  },
});
