import {InputNumber} from "../InputNumber/InputNumber";
import s from './SettingsCounter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setMaxValueAC} from "../../store/maxCounterReducer";
import {setMinValueAC} from "../../store/counterReducer";

type SettingsCounterPropsType = {
    setFocusInput: (focus: boolean) => void
}


export const SettingsCounter = (props: SettingsCounterPropsType) => {
    const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue.maxValue);
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue);
    const dispatch = useDispatch();

    return (
        <div className={s.settingsCounterContainer}>
            <InputNumber
                value={maxValue}
                name={'Max Value'}
                callBack={(num) => {
                    dispatch(setMaxValueAC(num))
                    props.setFocusInput(true);
                }}
                valueValidator={(num) => {
                    return num !== undefined && num > minValue && num >= 0;
                }}
            />
            <InputNumber
                value={minValue}
                name={'Start Value'}
                callBack={(num) => {
                    dispatch(setMinValueAC(num));
                    props.setFocusInput(true);
                }}
                valueValidator={(num) => {
                    return num !== undefined && num < maxValue && num >= 0;
                }}
            />

        </div>
    )
}