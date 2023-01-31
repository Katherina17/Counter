import s from './InputNumber.module.css';
import {ChangeEvent, useState} from "react";

type InputNumberPropsType = {
    name: 'Max Value' | 'Start Value';
    callBack: (num: number) => void;
    value?: number;
    valueValidator: (num: number | undefined) => boolean;
}

export const InputNumber = (props: InputNumberPropsType) => {
    let[inputValue, setInputValue] = useState(props.value);

    const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.currentTarget.value));
        props.callBack(Number(e.currentTarget.value));
    }

    return(
        <div className={s.inputContainer}>
            <span className={s.span}>
                {props.name}:
            </span>
            <input type='number'
                   onChange={inputOnChangeHandler}
                   className={!props.valueValidator(inputValue) ?  s.inputError : s.input}
                   value={inputValue}/>
        </div>
    )
}
