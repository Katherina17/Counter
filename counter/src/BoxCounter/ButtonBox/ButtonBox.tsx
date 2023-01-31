import {Button} from "../../Button/Button";
import s from './ButtonBox.module.css';

type ButtonBoxPropsType = {
    addCount: () => void;
    resetCount: () => void;
    counter: number;
    maxValue: number;
    minValue: number;
    focusInput: boolean
    error: boolean
}

export const ButtonBox = (props: ButtonBoxPropsType) => {
    const addOnClickHandler = () => props.addCount();
    const resetOnClickHandler = () => props.resetCount();

    return(
        <div className={s.buttonBoxContainer}>
            <Button name={'add'} callback={addOnClickHandler} disabled={props.counter === props.maxValue || props.focusInput || props.error}/>
            <Button name = {'reset'} callback={resetOnClickHandler} disabled={props.counter === props.minValue || props.focusInput || props.error}/>
        </div>
    )
}