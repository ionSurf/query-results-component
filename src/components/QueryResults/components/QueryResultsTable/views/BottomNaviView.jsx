const PaginatorView = () => {
  return (
    <div className="container table-paginator">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="./" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="./">1</a></li>
          <li className="page-item"><a className="page-link" href="./">2</a></li>
          <li className="page-item"><a className="page-link" href="./">3</a></li>
          <li className="page-item"><a className="page-link" href="./">4</a></li>
          <li className="page-item"><a className="page-link" href="./">5</a></li>
          <li className="page-item">
            <a className="page-link" href="./" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const ResultsPerPageView = () => {
  return (
    <>
      <span>Show results</span>
      <div className="input-group">
        <select className="custom-select" id="validationCustom04" value="10" onChange={() => { }} required>
          <option disabled value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>
    </>
  )

}

export default function BottomNaviView() {
  return (
    <>
      <div className="col-12">
        <h5>Query results footer (navigation)</h5>
      </div>

      <div className="col-6 align-self-start left-navi">
        <PaginatorView />
      </div>
      <div className="col-6 align-self-end right-navi">
        <ResultsPerPageView />
      </div>
    </>
  )
}