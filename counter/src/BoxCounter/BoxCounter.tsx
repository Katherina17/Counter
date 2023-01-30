import {Counter} from "./Counter/Counter";
import {ButtonBox} from "./ButtonBox/ButtonBox";
import s from './BoxCounter.module.css';
import {useState} from "react";

type boxCounterPropsType = {
    counter: number;
    addCount: () => void;
    resetCount: () => void;
    maxValue: number;
    minValue: number;
    validateStartAndEndValues: () => boolean
    focusInput: boolean
    error: boolean
}

export const BoxCounter = (props: boxCounterPropsType) => {
    const[invalidValue, setInvalid] = useState(false);
    return (
        <div className={s.boxCounterContainer}>
            <Counter counter={props.counter}
                     minValue={props.minValue}
                     maxValue={props.maxValue}
                     validateStartAndEndValues = {props.validateStartAndEndValues}
                     setInvalid = {setInvalid}
                     focusInput={props.focusInput}
                     error={props.error}
            />
            <ButtonBox addCount={props.addCount}
                       resetCount={props.resetCount}
                       counter={props.counter}
                       maxValue={props.maxValue}
                       minValue={props.minValue}
                       invalidValue={invalidValue}
                      />
        </div>
    )
}