import {Button} from "../../Button/Button";
import s from './ButtonBox.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {addCountAC, resetCounterAC} from "../../store/counterReducer";

type ButtonBoxPropsType = {
    setSettingCounter: (val: boolean) => void;
    focusInput: boolean
    error: boolean
}

export const ButtonBox = (props: ButtonBoxPropsType) => {
    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    let dispatch = useDispatch();
    const addOnClickHandler = () => dispatch(addCountAC());
    const resetOnClickHandler = () => dispatch(resetCounterAC());
    const setSettingCounterHandler = () => props.setSettingCounter(true);

    return(
        <div className={s.buttonBoxContainer}>
            <Button name={'add'} callback={addOnClickHandler} disabled={counter === maxValue || props.focusInput || props.error}/>
            <Button name = {'reset'} callback={resetOnClickHandler} disabled={ counter === minValue || props.focusInput || props.error}/>
            <Button name = {'set'} callback={setSettingCounterHandler} disabled={false}/>
        </div>
    )
}
