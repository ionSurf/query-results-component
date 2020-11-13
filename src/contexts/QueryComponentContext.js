import React from "react";

export const QueryComponentContext = React.createContext({
  state: {
    results: {
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
      resultTypes: [],
      resultStatus: [],
      initiatedBy: [],
    },
  },
  dispatch: () => {},
});
