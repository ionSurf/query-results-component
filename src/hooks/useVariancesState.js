import {useContext} from 'react';
import { QueryComponentContext } from "../contexts/queryComponentContext"

export default function useVariancesState() {
  const { state } = useContext( QueryComponentContext )
  return state.variances
}