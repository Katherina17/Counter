
import s from './Counter.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

type CounterPropsType = {
    focusInput: boolean
    error: boolean
}
export const Counter = (props: CounterPropsType) => {
    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue.maxValue)
    return(
        <div className={ counter === maxValue ? `${s.counterContainerMax}` : `${s.counterContainer}`}>
            {props.error && <p> Incorrect Value </p>}
            {(props.focusInput && !props.error) && <p> Enter values and press 'set' </p>}
            {!props.error && !props.focusInput && <p className={counter === maxValue ? `${s.maxVal}` : ''}>{counter}</p>}
        </div>
    )
}