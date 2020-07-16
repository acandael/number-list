import React, { useState } from 'react';
import AddNumber from './AddNumber';

const App = (): JSX.Element => {
  const [valuesList, setValuesList] = useState<number[]>([]);

  return (
    <div>
      {<AddNumber valuesList={valuesList} setValuesList={setValuesList} />}
    </div>
  );
};

export default App;
