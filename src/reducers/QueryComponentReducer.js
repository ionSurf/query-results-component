import { useReducer } from "react";

export default function QueryComponentReducer(state, action) {
  return {
    results: useReducer(state.results, action),
    filters: useReducer(state.filters, action),
  };
}
