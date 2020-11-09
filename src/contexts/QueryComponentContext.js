import React from "react";

export const QueryComponentContext = React.createContext({
  state: {
    variances: {
      collection: [],
      sortBy: "",
    },
    filters: {
      dateRange: {
        startDate: Date(),
        endDate: Date(),
      },
      associateName: [],
      areaOrDep: [],
      locations: [],
      varianceTypes: [],
      variancesStatus: [],
      initiatedBy: [],
    },
  },
  dispatch: () => {},
});
