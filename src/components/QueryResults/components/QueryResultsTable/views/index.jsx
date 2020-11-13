import { useState } from 'react';
import BottomNaviView from './BottomNaviView'

const IN_PROGRESS_ICON = 'IN_PROGRESS_ICON';
const ERROR_ICON = 'ERROR_ICON';
const DONE_ICON = 'DONE_ICON';

const ICON_CELL = 'ICON_CELL';
const TEXT_CELL = 'TEXT_CELL';
const DROPDOWN_CELL = 'DROPDOWN_CELL';
const ACTIONS_CELL = 'ACTIONS_CELL';

const tableHeaderView = hRows => (
  
    <tr>
      {hRows.map((hr, k) => (
        <th scope="col" key={k}>
          <div>
            {hr.title}
            {(hr.isSortable ? <span>X</span> : '')}
          </div>
        </th>
      ))}
    </tr>
)

const iconCellView = cContent => {

  let iconClass = ''
  switch (cContent.iconName) {
    case IN_PROGRESS_ICON:
      iconClass = 'fas fa-clock'
      break;
    case ERROR_ICON:
      iconClass = 'fas fa-exclamation-circle'
      break;
    case DONE_ICON:
      iconClass = 'fas fa-check-circle'
      break;
    default:
      return;
  }
  return (
    <i className={iconClass}></i>)
}

const textCellView = cData => {
  return (
    <span>{cData.data}</span>)
}

const DropdownLinksMenu = ({ options, selectedOption }) => {
  const [value, setValue] = useState(selectedOption);

  return (
    <div className="dropdown show">
      <a className="btn btn-white btn-sm dropdown-toggle" href="./" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {value}
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {options.map((o, k) => (
          <a key={k} className="dropdown-item" href="./" onClick={e => setValue(o)}>{o}</a>
        ))}
      </div>
    </div>
  )
}

const DropdownMenu = ({ options, selectedOption }) => {
  const [option, setOption] = useState(selectedOption);

  return (
    <select value={option} className="custom-select" id="validationCustom04" onChange={e => setOption(e.target.value)} required>
      { options.map((o, k) => (
        <option value={o}>{o}</option>
      ))}
    </select>
  )
}

const dropdownCellView = cData => (
  <DropdownLinksMenu
    options={cData.values}
    selectedOption={cData.selectedValue} />
)

const buttonCellView = cData => {
  return (
    <i className="fas fa-ellipsis-v"></i>
  )
}

const cellDataSwitcher = (c) => {
  switch (c.cellType) {
    case ICON_CELL:
      return iconCellView(c.content)
    case TEXT_CELL:
      return textCellView(c.content)
    case DROPDOWN_CELL:
      return dropdownCellView(c.content)
    case ACTIONS_CELL:
      return buttonCellView(c.content)
    default:
      return;
  }
}

const tableBodyRowsView = bRows => (
  bRows.map((r, rk) => (
    <tr key={rk} style={{ ...r.rowStyle }} {...r.rowActions} >
      { r.rowContent.map((c, ck) => (
        <td key={ck} style={{ ...c.cellStyle }} {...c.actions} >
          { cellDataSwitcher(c)}
        </td>
      ))}
    </tr>
  ))
)

const tableFooterView = _ => (
  <tr>
    <td>Foot1</td>
    <td>Foot2</td>
    <td>Foot3</td>
    <td>Foot4</td>
    <td>Foot5</td>
  </tr>
)

export const QueryResultsTableView = ({ headers, bodyRows }) => (
  <div className="row query-body">
    <div className="container">
      <h4>Query Results Component</h4>
    </div>
    <div className="column col-12">
      <div className="row">
        <div className="container">Query results header (table)</div>
      </div>
      <div className="row">
        <div className="container text-center">
          <table className="table">
            <thead className="thead-dark">
              {tableHeaderView(headers)}
            </thead>
            <tbody className="table-hover">
              {tableBodyRowsView(bodyRows)}
            </tbody>
            <tfoot>
              {tableFooterView()}
            </tfoot>
          </table>
        </div>
      </div>
      <div className="row">
        {BottomNaviView()}
      </div>
    </div>
  </div>
);