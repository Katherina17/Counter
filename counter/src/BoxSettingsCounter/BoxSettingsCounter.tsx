import s from '../BoxCounter/BoxCounter.module.css';
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";
import {SetButton} from "./SetButton/SetButton";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

type BoxSettingsCounterPropsType = {
    focusInput: boolean
    error: boolean
    setFocusInput: (focus: boolean) => void
    setSettingCounter: (val: boolean) => void;
    setError: (val: boolean) => void
}

export const BoxSettingsCounter = (props: BoxSettingsCounterPropsType) => {
    const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const isValidValues = () => {
        return !(minValue < 0 || minValue === maxValue || maxValue < minValue || maxValue < 0);
    }

        useEffect(() => {
        localStorage.setItem('setMinVal', JSON.stringify(minValue));
        localStorage.setItem('setMaxVal', JSON.stringify(maxValue));
    }, [minValue, maxValue]);

    useEffect(() => {
        props.setError(!isValidValues());
    }, [minValue, maxValue]);

    const addValuesForCounter = () => {
        props.setSettingCounter(false)
        props.setFocusInput(false);
    }

    return(
        <div className={s.boxCounterContainer}>
            <SettingsCounter setFocusInput = {props.setFocusInput}/>
            <SetButton callback={addValuesForCounter} focusInput={props.focusInput} error={props.error}/>
        </div>
    )
}