import QueryResultsView from "./view";
import {
  QueryResultsHeader,
  QueryResultsFilters,
  QueryResultsTable,
} from "./components";

export default function QueryResults() {
  return (
    <QueryResultsView>
      <QueryResultsHeader />
      <QueryResultsFilters />
      <QueryResultsTable />
    </QueryResultsView>
  );
}
