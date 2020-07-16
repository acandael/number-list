import React, { useState } from 'react';

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
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          const newValue = e.target.value;
          if (regexp.test(newValue)) {
            setValue(e.target.value);
          }
        }}
      ></input>
      <button>Add Number</button>
    </form>
  );
};

export default AddNumber;
