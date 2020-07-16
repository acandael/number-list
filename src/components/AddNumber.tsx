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

  return <div>Add Number</div>;
};

export default AddNumber;
