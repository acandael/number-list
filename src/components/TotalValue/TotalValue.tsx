import React from 'react';

interface AppProps {
  valuesList: number[];
}

const TotalValue = (props: AppProps): JSX.Element => {
  const renderTotal = () => {
    return props.valuesList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  return (
    <div className="ui column">
      <div className="ui medium header">Total Value</div>
      <p>{renderTotal()}</p>
    </div>
  );
};

export default TotalValue;
