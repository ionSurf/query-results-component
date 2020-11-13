const dateRangeInputView = ({ startDate, endDate }) => (
  <>
    <div className="col-12 text-center"><label>Date Range</label></div>
    <div className="col-12 text-center">
      <div className="input-group">
        <input onChange={() => {}} type="text" className="form-control" placeholder="10" aria-label="Input group example" aria-describedby="btnGroupAddon" />
        <div className="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="./">10</a>
            <a className="dropdown-item" href="./">15</a>
            <a className="dropdown-item" href="./">20</a>
          </div>
        </div>
      </div>
    </div>
  </>
)

const chipsInputChipView = ( title, key ) => (
  <span className="badge badge-pill badge-primary pt-2 pb-2 pl-3 pr-3" key={key}>
    {title}
    <span className="pl-2">x</span>
  </span>
)

function chipsInputView ({ title, chips }) {
  return(
  <>
    <div className="col-12 text-center"><label>{title}</label></div>
    <div className="col-12 text-left" style={{
      position: "relative",
      /* padding-top: 4px; */
      /* padding-bottom: 4px; */
      /* border: 1px solid; */
      /* height: fit-content; */
    }}><div className="form-control" style={{
      /* border: 1px solid; */
      display: "inline-block",
      padding: "7px 5px 34px 5px !important",
    }}>
        <div className="container" style={{ width: "272px", padding: "0px", margin: "0px", float: "left"/* padding-top: 4px; *//* padding-bottom: 4px; *//* border: 1px solid; */ }}>
          {
            chips.map( (c, k) => chipsInputChipView(c, k) )
          }
        </div>
        <input onChange={() => {}} className="" type="text" style={{
          width: "25px",
          float: "left",
          position: "relative",
          border: "0px"
        }} /></div>
    </div>
  </>
)}

const chipsFiltersByColumnsView = (filtersArray) => {
  const chipsInputArray = filtersArray.filter(f => f.type === 'chipsInput' );
  if (chipsInputArray.length < 1) return;
  const chipsFiltersColumns = [ 
    chipsInputArray.slice(0, Math.ceil(chipsInputArray.length / 2)), 
    ( chipsInputArray.length > 1 ) 
      ? chipsInputArray.slice( Math.ceil(chipsInputArray.length / 2), chipsInputArray.length )
      : undefined
  ];

  return chipsFiltersColumns.map( (c, k) => {
    return(
      <div className="col-4" key={k}>
        { c.map( (c, k) => (
          <div className="row" key={k}>
            <div className="container">
              {chipsInputView({
                title: c.content.title,
                chips: c.content.chips
              }) }
            </div>
          </div>
        ) ) }
      </div>
    );
  } )
}

export const QueryResultsFiltersView = ({ filtersArray }) => (
  <div className="row query-filters">
    <div className="container">
      <h4>Query Filter Component</h4>
      <div className="column col-12">
        <div className="row filter-body">
          <div className="col-4">
            <div className="row">
              <div className="container">
                { dateRangeInputView( {
                  startDate: '2020-10-01',
                  endDate: '2020-10-30'
                } ) }
              </div>
            </div>
          </div>
          {chipsFiltersByColumnsView(filtersArray)}
        </div>
        <div className="row filter-bottom-navi">
          <div className="col align-self-end text-right pt-3">
            <div className="container">
              <button type="button" className="btn btn-outline-success">
                Clear Filters
                        </button>
              <button type="button" className="btn btn-outline-success">
                Apply Filters
                        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);