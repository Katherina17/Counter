import {InputNumber} from "../InputNumber/InputNumber";
import s from './SettingsCounter.module.css';

type SettingsCounterPropsType = {
    minValue: number;
    maxValue: number;
    setCurrentMinValue: (num: number) => void
    setCurrentMaxValue: (num: number) => void
    setFocusInput: (focus: boolean) => void
    validateStartAndEndValues: () => boolean
    error: boolean
}


export const SettingsCounter = (props: SettingsCounterPropsType) => {
    return(
        <div className={s.settingsCounterContainer}>
            <InputNumber
                value={props.maxValue}
                name={'Max Value'}
                callBack={(num) => {props.setCurrentMaxValue(num)}}
                setFocusInput={props.setFocusInput}
                validateStartAndEndValues={props.validateStartAndEndValues}
                error={props.error}
            />
            <InputNumber
                value={props.minValue}
                name={'Start Value'}
                callBack={ (num) =>  {props.setCurrentMinValue(num)}}
                setFocusInput={props.setFocusInput}
                validateStartAndEndValues = {props.validateStartAndEndValues}
                error={props.error}
            />

        </div>
    )
}