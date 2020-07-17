import React, { useState } from 'react';
import './AddNumber.css';

interface AppProps {
  valuesList: number[];
  setValuesList: (num: number) => void;
}

const AddNumber = (props: AppProps): JSX.Element => {
  const [value, setValue] = useState('');
  const regexp = new RegExp(`^-?[0-9]*$`);

  const addNumber = (value: string) => {
    const number = parseInt(value);
    props.setValuesList(number);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addNumber(value);
    setValue('');
  };

  return (
    <>
      <div className="ui column">
        <div className="ui input">
          <input
            className="ui two columns"
            type="text"
            value={value}
            onChange={(e) => {
              const newValue = e.target.value;
              if (regexp.test(newValue)) {
                setValue(e.target.value);
              }
            }}
          ></input>
        </div>
      </div>
      <div className="ui column ">
        <button className="ui primary button" onClick={submitHandler}>
          Add Number
        </button>
      </div>
      <div className="ui column"></div>
      <div className="ui column"></div>
    </>
  );
};

export default AddNumber;
