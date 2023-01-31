
import s from './Counter.module.css';

type CounterPropsType = {
    counter: number;
    maxValue: number;
    minValue: number;
    focusInput: boolean
    error: boolean
}
export const Counter = (props: CounterPropsType) => {
    return(
        <div className={ props.counter === props.maxValue ? `${s.counterContainerMax}` : `${s.counterContainer}`}>
            {props.error && <p> Incorrect Value </p>}
            {(props.focusInput && !props.error) && <p> Enter values and press 'set' </p>}
            {!props.error && !props.focusInput && <p className={props.counter === props.maxValue ? `${s.maxVal}` : ''}>{props.counter}</p>}
        </div>
    )
}