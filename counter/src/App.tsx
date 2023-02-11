import React, {useEffect, useLayoutEffect, useState} from 'react';
import './App.css';
import {BoxCounter} from './BoxCounter/BoxCounter'
import {BoxSettingsCounter} from "./BoxSettingsCounter/BoxSettingsCounter";

function App() {
    const [focusInput, setFocusInput] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isSettingCounter, setSettingCounter] = useState<boolean>(false);

    return (
        <div className="counter-container">
            {isSettingCounter && <BoxSettingsCounter
                focusInput={focusInput}
                setFocusInput={setFocusInput}
                error={error}
                setSettingCounter={setSettingCounter}
                setError={setError}/>}
            {!isSettingCounter && <BoxCounter
                                              focusInput={focusInput}
                                              setSettingCounter={setSettingCounter}
                                              isSettingCounter={isSettingCounter}
                                              error={error}/>}
        </div>
    );
}

export default App;
