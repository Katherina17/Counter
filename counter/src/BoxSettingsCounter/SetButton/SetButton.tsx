import {Button} from "../../Button/Button";
import s from './SetButton.module.css';

type SetButtonPropsType = {
    callback: () => void;
    focusInput: boolean
    error: boolean
}

export const SetButton = (props: SetButtonPropsType) => {
    return(
        <div className={s.setButtonContainer}>
            <Button name={'Set'} callback={props.callback} disabled={props.error}/>
        </div>
    )
}