import { QueryResultsFiltersView } from "./view";

const staticFilters = [
  {
    type: 'dateRange',
    content: {
      title: '',
      startDate: '',
      endDate: '',
    }
  },
  {
    type: 'chipsInput',
    content: {
      title: 'Associate Name',
      chips: [ 'Rose Mary', 'Phillip Mcintosh' ]
    }
  },
  {
    type: 'chipsInput',
    content: {
      title: 'Area / Department',
      chips: [ 'Rose Mary', 'Phillip Mcintosh' ]
    }
  },
  {
    type: 'chipsInput',
    content: {
      title: 'Location',
      chips: [ 'Rose Mary', 'Phillip Mcintosh' ]
    }
  },
  {
    type: 'chipsInput',
    content: {
      title: 'Variance Type',
      chips: [ 'Rose Mary', 'Phillip Mcintosh' ]
    }
  },
  {
    type: 'chipsInput',
    content: {
      title: 'Variance Status',
      chips: [ 'Rose Mary', 'Phillip Mcintosh' ]
    }
  },
  {
    type: 'chipsInput',
    content: {
      title: 'Initiated By',
      chips: [ 'Rose Mary', 'Phillip Mcintosh' ]
    }
  },
]

export const QueryResultsFilters = () => {
  return(
    <QueryResultsFiltersView
      filtersArray={staticFilters} />
  );
}