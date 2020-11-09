import {useContext} from 'react';
import QueryComponentContext from '../contexts';

export default function useDispatch( context = QueryComponentContext ) {
  const { dispatch } = useContext( context );
  return dispatch;
}