const PaginatorView = ({ pages, currentPage, totalPagesCount, changePageHandler, prevPageHandler, nextPageHandler }) => (
  <div className="container table-paginator">
    <nav aria-label="Page navigation example">
      <ul className="pagination align-items-center">
        <li className={`page-item ${ (currentPage === 0 ) ? 'disabled' : '' }`}>
          <a className="page-link" href="./" onClick={ e => {e.preventDefault(); prevPageHandler(currentPage)} } aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map((p, k) => (
          <li key={k} className={`page-item ${ (currentPage === p ) ? 'active' : '' }`}>
            <a className="page-link" href="./" onClick={e => { e.preventDefault(); changePageHandler(p) } }>{p + 1}</a>
          </li>
        ))}
        <li className={`page-item ${ (currentPage === (totalPagesCount - 1) ) ? 'disabled' : '' }`}>
          <a className="page-link" href="./" onClick={e => { e.preventDefault(); nextPageHandler(currentPage) } } aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default PaginatorView;