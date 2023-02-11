import {Counter} from "./Counter/Counter";
import {ButtonBox} from "./ButtonBox/ButtonBox";
import s from './BoxCounter.module.css';

type boxCounterPropsType = {
    focusInput: boolean
    error: boolean;
    isSettingCounter: boolean
    setSettingCounter: (val: boolean) => void
}

export const BoxCounter = (props: boxCounterPropsType) => {
    return (
        <div className={s.boxCounterContainer}>
            <Counter
                focusInput={props.focusInput}
                error={props.error}
            />
            <ButtonBox
                focusInput={props.focusInput}
                setSettingCounter={props.setSettingCounter}
                error={props.error}
            />
        </div>
    )
}