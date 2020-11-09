import { useReducer } from "react";

export default function QueryComponentReducer(state, action) {
  return {
    variances: useReducer(state.variances, action),
    filters: useReducer(state.filters, action),
  };
}
