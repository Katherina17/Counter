import {Counter} from "./Counter/Counter";
import {ButtonBox} from "./ButtonBox/ButtonBox";
import s from './BoxCounter.module.css';

type boxCounterPropsType = {
    counter: number;
    addCount: () => void;
    resetCount: () => void;
    maxValue: number;
    minValue: number;
}

export const BoxCounter = (props: boxCounterPropsType) => {
    return(
        <div className={s.boxCounterContainer}>
            <Counter counter={props.counter}/>
            <ButtonBox addCount={props.addCount}
                       resetCount={props.resetCount}
                       counter ={props.counter}
                        maxValue={props.maxValue}
                        minValue={props.minValue}/>
        </div>
    )
}