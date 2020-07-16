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
    <div>
      <p>Total Value</p>
      {renderTotal()}
    </div>
  );
};

export default TotalValue;
