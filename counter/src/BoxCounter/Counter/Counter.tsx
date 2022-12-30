
import s from './Counter.module.css';

type CounterPropsType = {
    counter: number;
}
export const Counter = (props: CounterPropsType) => {
    return(
        <div className={ props.counter === 5 ? `${s.counterContainerMax}` : `${s.counterContainer}`}>
            <p className={props.counter === 5 ? `${s.maxVal}` : ''}>{props.counter}</p>
        </div>
    )
}