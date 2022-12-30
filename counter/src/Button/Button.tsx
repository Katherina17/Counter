
import s from './Button.module.css'

type ButtonPropsType = {
    name: string;
    callback: () => void;
    disabled: boolean;
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return(
        <button className={props.disabled ? `${s.disabled}`:  s.button } onClick={onClickHandler} disabled={props.disabled}> {props.name}</button>
    )
}