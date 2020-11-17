import Pagination from '../components/Pagination'
import ResultsPerPage from '../components/ResultsPerPage'

export default function BottomNaviView({header}) {
  return (
    <>
      <div className="col-12">
        <h5>{header}</h5>
      </div>
      <div className="col-6 align-self-start left-navi align-bottom">
        <Pagination
          resultsPerPage={3}
          totalResults={21}
          initialCurrentPage={0}
          navElementsLimit={3}
          actionCallback={() => {}}
           />
      </div>
      <div className="col-6 align-self-end right-navi text-right align-middle">
        <ResultsPerPage
          totalResults={9}
          prescaler={3}
          actionCallback={() => {}} />
      </div>
    </>
  )
}