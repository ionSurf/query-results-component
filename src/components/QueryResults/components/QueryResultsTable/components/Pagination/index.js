import { useState } from 'react';
import PaginatorView from './view'

const prevPage = currentPage => ( currentPage > 0  ) 
  ? --currentPage
  : currentPage;

const nextPage = (currentPage, pagesCount) => ( currentPage < (pagesCount -1) ) 
  ? ++currentPage
  : currentPage;

const Pagination = ({ initialCurrentPage, resultsPerPage, totalResults, navElementsLimit, actionCallback }) => {
  const pagesCount = totalResults / resultsPerPage;
  
  const [currentPage, setCurrentPage] = useState(initialCurrentPage !== undefined ? initialCurrentPage : 0);
  
  const leftLimit   = ( (currentPage - Math.floor(navElementsLimit/2)) < 1 )
    ? 0
    : (currentPage + Math.floor(navElementsLimit/2)) < pagesCount
      ? currentPage - Math.floor(navElementsLimit/2)
      : pagesCount - navElementsLimit
     
  const navisCount  = (leftLimit + navElementsLimit < pagesCount)
    ? navElementsLimit
    : pagesCount;

  const pages = Array.from( Array(pagesCount).keys() ).splice( leftLimit, navisCount )

  const changePageHandler = page => {
    setCurrentPage(page)
    actionCallback(currentPage);
  }
  const prevPageHandler = page => changePageHandler( prevPage(page) );
  const nextPageHandler = page => changePageHandler( nextPage(page, pagesCount) );

  return (
    <PaginatorView
      pages             ={pages}
      totalPagesCount   ={pagesCount}
      currentPage       ={currentPage}
      changePageHandler ={changePageHandler}
      prevPageHandler   ={prevPageHandler} // setCurrentPage(prevPage)
      nextPageHandler   ={nextPageHandler} // setCurrentPage(nextPage)
       />
  )
}

export default Pagination;