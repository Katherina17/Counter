
import s from './Counter.module.css';

type CounterPropsType = {
    counter: number;
    maxValue: number;
    minValue: number;
    validateStartAndEndValues: () => boolean;
    setInvalid: (val: boolean) => void;
    focusInput: boolean
    error: boolean
}
export const Counter = (props: CounterPropsType) => {
    const checkInvalid = () => props.validateStartAndEndValues() ? props.setInvalid(true) : props.setInvalid(false);

    return(
        <div className={ props.counter === props.maxValue ? `${s.counterContainerMax}` : `${s.counterContainer}`}>
            {props.validateStartAndEndValues() && !props.focusInput && props.error && <p> Incorrect Value </p>}
            {props.focusInput && <p> Enter values and press 'set' </p>}
            {!props.validateStartAndEndValues() && !props.focusInput && <p className={props.counter === props.maxValue ? `${s.maxVal}` : ''}>{props.counter}</p>}
        </div>
    )
}