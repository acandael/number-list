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

  const renderDeleteButton = () => {
    if (props.valuesList.length !== 0) {
      return (
        <button className="ui button" onClick={() => deleteSelected(selected)}>
          Delete Selected
        </button>
      );
    }
  };

  return (
    <>
      <div className="ui column">
        {props.valuesList.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => handleSelected(value, index.toString())}
              className={`ui button ${
                activeButton === index.toString() ? 'primary' : null
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="ui column">{renderDeleteButton()}</div>
      <div className="ui column"></div>
      <div className="ui column"></div>
    </>
  );
};

export default NumberList;
