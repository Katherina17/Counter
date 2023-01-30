import s from './InputNumber.module.css';
import {ChangeEvent, useState} from "react";

type InputNumberPropsType = {
    name: 'Max Value' | 'Start Value';
    callBack: (num: number) => void;
    value?: number;
    setFocusInput: (focus: boolean) => void
    validateStartAndEndValues: () => boolean
    error: boolean
}

export const InputNumber = (props: InputNumberPropsType) => {
    let[inputValue, setInputValue] = useState(props.value);
    const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.currentTarget.value));
        props.callBack(Number(e.currentTarget.value));
        if(e.currentTarget.value[0] && e.currentTarget.value[1] !== undefined){
            props.setFocusInput(false);
            props.validateStartAndEndValues();
        } else {
            props.setFocusInput(true)
        }
    }

    return(
        <div className={s.inputContainer}>
            <span className={s.span}>
                {props.name}:
            </span>
            <input type='number' onChange={inputOnChangeHandler} className={props.error ?  s.inputError : s.input} value={inputValue}/>
        </div>
    )
}
