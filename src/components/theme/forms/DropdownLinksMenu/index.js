import { useState } from 'react';

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

export default DropdownLinksMenu;