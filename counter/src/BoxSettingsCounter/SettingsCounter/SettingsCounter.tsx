import {InputNumber} from "../InputNumber/InputNumber";
import s from './SettingsCounter.module.css';

type SettingsCounterPropsType = {
    minValue: number;
    maxValue: number;
    setCurrentMinValue: (num: number) => void
    setCurrentMaxValue: (num: number) => void
    setFocusInput: (focus: boolean) => void
}


export const SettingsCounter = (props: SettingsCounterPropsType) => {
    return (
        <div className={s.settingsCounterContainer}>
            <InputNumber
                value={props.maxValue}
                name={'Max Value'}
                callBack={(num) => {
                    props.setCurrentMaxValue(num);
                    props.setFocusInput(true);
                }}
                valueValidator={(num) => {
                    return num !== undefined && num > props.minValue && num >= 0;
                }}
            />
            <InputNumber
                value={props.minValue}
                name={'Start Value'}
                callBack={(num) => {
                    props.setCurrentMinValue(num);
                    props.setFocusInput(true);
                }}
                valueValidator={(num) => {
                    return num !== undefined && num < props.maxValue && num >= 0;
                }}
            />

        </div>
    )
}