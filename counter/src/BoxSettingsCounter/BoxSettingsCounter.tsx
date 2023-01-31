import s from '../BoxCounter/BoxCounter.module.css';
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";
import {SetButton} from "./SetButton/SetButton";
import {useEffect, useState} from "react";
import {validateHeaderValue} from "http";

type BoxSettingsCounterPropsType = {
    setMinValue: (num: number) => void;
    setMaxValue: (num: number) => void;
    setCounter: (num: number) => void;
    maxValue: number;
    minValue: number;
    focusInput: boolean
    error: boolean
    setFocusInput: (focus: boolean) => void
    setError: (val: boolean) => void
}

export const BoxSettingsCounter = (props: BoxSettingsCounterPropsType) => {
    const [currentMinValue, setCurrentMinValue] = useState(props.minValue);
    const [currentMaxValue, setCurrentMaxValue] = useState(props.maxValue);

    const isValidValues = () => {
        return !(currentMinValue < 0 || currentMinValue === currentMaxValue || currentMaxValue < currentMinValue || currentMaxValue < 0);
    }

    useEffect(() => {
        props.setError(!isValidValues());
    }, [currentMinValue, currentMaxValue]);

    const addValuesForCounter = () => {
        props.setMinValue(currentMinValue);
        props.setMaxValue(currentMaxValue);
        props.setCounter(currentMinValue);
        props.setFocusInput(false);
    }

    return(
        <div className={s.boxCounterContainer} style={{marginRight: '5rem'}}>
            <SettingsCounter
                maxValue={currentMaxValue}
                minValue={currentMinValue}
                setCurrentMinValue = {(num) => {
                    setCurrentMinValue(num);
                }}
                setCurrentMaxValue = {(num) => {
                    setCurrentMaxValue(num);
                }}
                setFocusInput = {props.setFocusInput}
               />
            <SetButton callback={addValuesForCounter} focusInput={props.focusInput} error={props.error}/>
        </div>
    )
}