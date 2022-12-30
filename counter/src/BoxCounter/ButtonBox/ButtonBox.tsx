import {Button} from "../../Button/Button";
import s from './ButtonBox.module.css';

type ButtonBoxPropsType = {
    addCount: () => void;
    resetCount: () => void;
    counter: number;
    maxValue: number;
    minValue: number;
}

export const ButtonBox = (props: ButtonBoxPropsType) => {
    const addOnClickHandler = () => props.addCount();
    const resetOnClickHandler = () => props.resetCount();

    return(
        <div className={s.buttonBoxContainer}>
            <Button name={'add'} callback={addOnClickHandler} disabled={props.counter === props.maxValue }/>
            <Button name = {'reset'} callback={resetOnClickHandler} disabled={props.counter === props.minValue }/>
        </div>
    )
}