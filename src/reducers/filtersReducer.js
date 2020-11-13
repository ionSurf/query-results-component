import * as actions from '../constants/filtersActions'
export default function filterReducer(state, action) {
  switch( action.type ) {
    case actions.FETCH_FILTER:
      return state;
    case actions.ADD_FILTER:
      return state;
    case actions.DELETE_FILTER:
      return state;
    case actions.APPLY_FILTER:
      return state;
    case actions.CLEAR_FILTERS:
      return state;
    default:
      return state;
  }
}