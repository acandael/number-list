import React, { useState } from 'react';
import './NumberList.css';

interface AppProps {
  valuesList: number[];
  removeNumberFromList: (num: number) => void;
}

const NumberList = (props: AppProps): JSX.Element => {
  const [selected, setSelected] = useState(0);
  const [activeButton, setActiveButton] = useState('');

  const deleteSelected = (value: number) => {
    props.removeNumberFromList(value);
    setActiveButton('');
  };

  const handleSelected = (selectedNum: number, selectedButton: string) => {
    setSelected(selectedNum);

    setActiveButton(selectedButton);
  };

  return (
    <div>
      <ul>
        {props.valuesList.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => handleSelected(value, index.toString())}
              className={`${
                activeButton === index.toString() ? 'active-color' : null
              }`}
            >
              {value}
            </button>
          );
        })}
      </ul>
      <button onClick={() => deleteSelected(selected)}>Delete Selected</button>
    </div>
  );
};

export default NumberList;
