
type InitialStateType = {
    counter: number,
    minValue: number
}

const initialState: InitialStateType = {
    minValue: 0,
    counter: 0,
}

export const counterReducer = (state: InitialStateType = initialState, action: commonAC):InitialStateType => {
    switch (action.type) {
        case "ADD_COUNT": {
            return {...state, counter: state.counter + 1}
        }
        case "RESET_COUNTER": {
            return {...state, counter: state.minValue}
        }
        case "SET_MIN_VALUE": {
            return {...state, minValue: action.payload.minValue, counter: action.payload.minValue}
        }
        default: return {...state}
    }
}

type addCountType = ReturnType<typeof addCountAC>;
type  resetCounterType = ReturnType<typeof  resetCounterAC>;
type  setMinValueType = ReturnType<typeof  setMinValueAC>;

type commonAC = addCountType | resetCounterType | setMinValueType

export const addCountAC = () => {
    return {
        type: 'ADD_COUNT'
    } as const
}

export const resetCounterAC = () => {
    return {
        type: 'RESET_COUNTER'
    } as const
}

export const setMinValueAC = (minValue: number) => {
    return {
        type: 'SET_MIN_VALUE',
        payload: {
            minValue
        }
    } as const
}
