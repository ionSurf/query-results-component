import * as actions from '../constants/resultsActions'
export default function resultsReducer(state, action) {
  switch( action.type ) {
    case actions.FETCH_RESULTS:
      return state;
    case actions.UPDATE_RESULT:
      return state;
    case actions.DELETE_RESULT:
      return state;
    default:
      return state;
  }
}