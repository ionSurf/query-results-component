import {useState} from 'react';
import ChipsInputView from './view';

export default function ChipsInput({ initialState }) {
  const [chips, setChips] = useState(initialState.chips);

  const handleDeleteChip = title => {
    setChips( chips.filter( c => c.title !== title ) )
  }
  const handleAddChip = title => {
    setChips( ...chips, title )
  }

  return(
    <ChipsInputView
      chips={chips}
      handleDeleteChip={handleDeleteChip}
      handleAddChip={handleAddChip} />
  );
}