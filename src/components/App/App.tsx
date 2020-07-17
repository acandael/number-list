import React, { useState } from 'react';
import AddNumber from '../AddNumber/AddNumber';
import NumberList from '../NumberList/NumberList';
import TotalValue from '../TotalValue/TotalValue';

import './App.css';

const App = (): JSX.Element => {
  const [valuesList, setValuesList] = useState<number[]>([]);

  const addNumberToList = (num: number) => {
    setValuesList((prev) => prev.concat(num));
  };

  const removeFirstFoundVal = (arr: number[], num: number): number[] => {
    const idx = arr.indexOf(num);

    if (idx === -1) {
      return [...arr];
    }

    return arr.filter((el, i) => i !== idx);
  };

  const removeNumberFromList = (num: number) => {
    setValuesList((prev) => removeFirstFoundVal(prev, num));
  };

  return (
    <div className="ui container">
      <div className="ui two column grid">
        <div className="row">
          <div className="ui column">
            <div className="ui medium header">My Sum</div>
          </div>
        </div>
        <div className="four column row">
          {
            <AddNumber
              valuesList={valuesList}
              setValuesList={addNumberToList}
            />
          }
        </div>
        <div className="four column row">
          {
            <NumberList
              valuesList={valuesList}
              removeNumberFromList={removeNumberFromList}
            />
          }
        </div>
        <div className="row">{<TotalValue valuesList={valuesList} />}</div>
      </div>
    </div>
  );
};

export default App;
