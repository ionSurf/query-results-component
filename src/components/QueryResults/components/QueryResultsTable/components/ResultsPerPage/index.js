import ResultsPerPageView from './view';

const getKeysFromTotalResults = (totalResults, prescaler) => {
  let inc = 1;
  let arr = []
  while( (totalResults / (prescaler * inc) ) >= 1 ) {
    arr.push(prescaler * inc)
    ++inc;
  }
  return arr;
}

const ResultsPerPage = ({ totalResults, prescaler, options, defaultValue, actionCallback}) => {

  const optionsArray = ( options !== undefined )
    ? options.map( o => ({
      value: o,
      label: o
    }) )
    : getKeysFromTotalResults(totalResults, prescaler).map( o => ({
      value: o,
      label: o
    }) )

  return <ResultsPerPageView
    optionsArray    ={ optionsArray }
    selectedOption  ={ (defaultValue !== undefined && (defaultValue in optionsArray ) )
      ? optionsArray[defaultValue] 
      : optionsArray[0]}
    actionCallback={actionCallback}
    startTextLabel={"Show"}
    endTextLabel={"results from table"}
    />
}

export default ResultsPerPage;