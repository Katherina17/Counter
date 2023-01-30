import React, {useState} from 'react';
import './App.css';
import {BoxCounter} from './BoxCounter/BoxCounter'
import {BoxSettingsCounter} from "./BoxSettingsCounter/BoxSettingsCounter";

function App() {
  const [minValue, setMinValue] = useState<number>(0);
  const[maxValue, setMaxValue] = useState<number>(5);
  const[counter, setCounter] = useState<number>(minValue);
  const[focusInput, setFocusInput] = useState<boolean>(false);
  const[error, setError] = useState<boolean>(false);

  const validateStartAndEndValues = () => {
    if(minValue < 0){
      setError(true)
      return true;
    }
    if(minValue === maxValue){
      setError(true)
      return true;
    }
    if(maxValue < minValue){
      setError(true)
      return true
    }
    setError(false)
    return false;
  }

  const resetCount = () => setCounter(minValue);
  const addCount = () => setCounter(counter + 1);

  return (
      <div className="counter-container">
        <BoxSettingsCounter
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            focusInput={focusInput}
            setFocusInput={setFocusInput}
            setCounter={setCounter}
            validateStartAndEndValues={validateStartAndEndValues}
            error={error}
            setError={setError}/>
        <BoxCounter counter={counter}
                    addCount={addCount}
                    resetCount={resetCount}
                    maxValue={maxValue}
                    minValue={minValue}
                    focusInput={focusInput}
                    error={error}
                    validateStartAndEndValues={validateStartAndEndValues}/>
    </div>
  );
}

export default App;
