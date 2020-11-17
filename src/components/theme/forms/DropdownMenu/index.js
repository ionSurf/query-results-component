import { useState } from 'react';

const DropdownMenu = ({ options, selectedOption, classNames, id, onChangeCallback }) => {
  const [option, setOption] = useState(selectedOption.value !== undefined ? selectedOption.value : options[0]);
  if ( options.length === 0 ) return;

  return (
    <select value={option} className={`custom-select ${classNames}`} id={id} onChange={e => {setOption(e.target.value); onChangeCallback(e)}} required>
      { options.map((o, k) => (
        <option key={k} value={o.value}>{o.label}</option>
      ))}
    </select>
  )
}

export default DropdownMenu;