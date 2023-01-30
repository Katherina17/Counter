import s from '../BoxCounter/BoxCounter.module.css';
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";
import {SetButton} from "./SetButton/SetButton";
import {useState} from "react";

type BoxSettingsCounterPropsType = {
    setMinValue: (num: number) => void;
    setMaxValue: (num: number) => void;
    setCounter: (num: number) => void;
    maxValue: number;
    minValue: number;
    focusInput: boolean
    error: boolean
    setFocusInput: (focus: boolean) => void
    validateStartAndEndValues: () => boolean
    setError: (val: boolean) => void
}

export const BoxSettingsCounter = (props: BoxSettingsCounterPropsType) => {
    const [currentMinValue, setCurrentMinValue] = useState(props.minValue);
    const [currentMaxValue, setCurrentMaxValue] = useState(props.maxValue);

    const addValuesForCounter = () => {
        props.setMinValue(currentMinValue);
        props.setMaxValue(currentMaxValue);
        props.setCounter(currentMinValue);
        props.setFocusInput(false)
    }

    return(
        <div className={s.boxCounterContainer} style={{marginRight: '5rem'}}>
            <SettingsCounter
                maxValue={props.maxValue}
                minValue={props.minValue}
                setCurrentMinValue = {setCurrentMinValue}
                setCurrentMaxValue = {setCurrentMaxValue}
                setFocusInput = {props.setFocusInput}
                validateStartAndEndValues = {props.validateStartAndEndValues}
                error = {props.error}
               />
            <SetButton callback={addValuesForCounter} focusInput={props.focusInput} error={props.error}/>
        </div>
    )
}