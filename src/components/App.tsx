import React, { useState } from 'react';
import AddNumber from './AddNumber';
import NumberList from './NumberList';

const App = (): JSX.Element => {
  const [valuesList, setValuesList] = useState<number[]>([]);

  const addNumberToList = (num: number) => {
    setValuesList((prev) => prev.concat(num));
  };

  const deleteNumberFromList = (num: number) => {
    setValuesList(valuesList.filter((e) => e !== num));
  };

  return (
    <div>
      {
        <div>
          <AddNumber valuesList={valuesList} setValuesList={addNumberToList} />
        </div>
      }
      {
        <div>
          {
            <NumberList
              valuesList={valuesList}
              removeNumberFromList={deleteNumberFromList}
            />
          }
        </div>
      }
    </div>
  );
};

export default App;
