import React, {useState} from 'react';
import './App.css';
import {BoxCounter} from './BoxCounter/BoxCounter'

function App() {

  const[counter, setCounter] = useState<number>(0);
  let maxValue = 5;
  let minValue = 0;

  const resetCount = () => setCounter(minValue);
  const addCount = () => setCounter(counter + 1);

  return (
    <div className="counter-container">
      <BoxCounter counter={counter}
                  addCount={addCount}
                  resetCount={resetCount}
                  maxValue = {maxValue}
                  minValue={minValue}/>
    </div>
  );
}

export default App;
