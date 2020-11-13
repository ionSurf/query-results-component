import { QueryResultsTableView } from "./views";
import { staticCellData, staticHeaders } from '../../../../mockData/'

export const QueryResultsTable = () => {
  return(
    <QueryResultsTableView
      headers={staticHeaders}
      bodyRows={staticCellData} />
  );
}