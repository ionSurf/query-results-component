const { DropdownMenu } = require("../../../../../theme/forms");

const ResultsPerPageView = ({ optionsArray, selectedOption, startTextLabel, endTextLabel, actionCallback }) => (
  <>
    {startTextLabel}
    <div className="input-group w-25 d-inline-flex p-2">
      <DropdownMenu
        classNames={''}
        id={'ResultsPerPage'}
        options={optionsArray}
        selectedOption={selectedOption}
        onChangeCallback={actionCallback} />
    </div>
    {endTextLabel}
  </>
)

export default ResultsPerPageView;