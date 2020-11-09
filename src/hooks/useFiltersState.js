import {useContext} from 'react';
import { QueryComponentContext } from "../contexts/queryComponentContext"

export default function useFiltersState() {
  const { state } = useContext( QueryComponentContext )
  return state.filters
}