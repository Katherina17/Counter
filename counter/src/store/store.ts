import {combineReducers, legacy_createStore} from "redux";
import {maxCounterReducer} from "./maxCounterReducer";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    maxValue: maxCounterReducer,
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

