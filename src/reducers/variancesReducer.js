import * as actions from '../constants/varianceActions'
export default function varianceReducer(state, action) {
  switch( action.type ) {
    case actions.FETCH_VARIANCES:
      return state;
    case actions.UPDATE_VARIANCE:
      return state;
    case actions.DELETE_VARIANCE:
      return state;
    default:
      return state;
  }
}