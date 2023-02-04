import React, {useEffect, useLayoutEffect, useState} from 'react';
import './App.css';
import {BoxCounter} from './BoxCounter/BoxCounter'
import {BoxSettingsCounter} from "./BoxSettingsCounter/BoxSettingsCounter";

function App() {
    const [minValue, setMinValue] = useState<number>(Number(localStorage.getItem('setMinVal') ?? "0"));
    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('setMaxVal') ?? "5"));
    const [counter, setCounter] = useState<number>(minValue);
    const [focusInput, setFocusInput] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isSettingCounter, setSettingCounter] = useState<boolean>(false);

    const resetCount = () => setCounter(minValue);
    const addCount = () => setCounter(counter + 1);

    useEffect(() => {
        localStorage.setItem('setMinVal', JSON.stringify(minValue));
        localStorage.setItem('setMaxVal', JSON.stringify(maxValue));
    }, [minValue, maxValue]);

    return (
        <div className="counter-container">
            {isSettingCounter && <BoxSettingsCounter
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                focusInput={focusInput}
                setFocusInput={setFocusInput}
                setCounter={setCounter}
                error={error}
                setSettingCounter={setSettingCounter}
                setError={setError}/>}
            {!isSettingCounter && <BoxCounter counter={counter}
                                              addCount={addCount}
                                              resetCount={resetCount}
                                              maxValue={maxValue}
                                              minValue={minValue}
                                              focusInput={focusInput}
                                              setSettingCounter={setSettingCounter}
                                              isSettingCounter={isSettingCounter}
                                              error={error}/>}
        </div>
    );
}

export default App;
