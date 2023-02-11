
type InitialStateType = {
    maxValue: number
}

const initialState: InitialStateType = {
    maxValue: 5
}

export const maxCounterReducer = (state: InitialStateType = initialState, action: commonAC):InitialStateType  => {
    switch (action.type) {
        case "SET_MAX_VALUE": {
            return {...state, maxValue: action.payload.maxValue}
        }
        default: return state
    }
}

type setMaxValueType = ReturnType<typeof setMaxValueAC>
type commonAC = setMaxValueType


export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload: {
            maxValue
        }
    }
}

