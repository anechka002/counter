const MIN_VALUE = 0;
const MAX_VALUE = 5;
const STEP = 1;

const initialState = {
  count: MIN_VALUE,
  min: MIN_VALUE,
  max: MAX_VALUE,
}

type InitialType = typeof initialState

type ActionsType = 
  | ReturnType<typeof incValueAC>
  | ReturnType<typeof resetValueAC>
  | ReturnType<typeof setMinInputValueAC>
  | ReturnType<typeof setMaxInputValueAC>
  | ReturnType<typeof setCountAC>

export const countReducer = (state: InitialType = initialState, action: ActionsType): InitialType => {
  switch(action.type) {
    case 'INC-VALUE': {
      return {
        ...state,
        count: state.count + STEP
      }
    }
    case 'RESET-VALUE': {
      return {
        ...state,
        count: state.min
      }
    }
    case'SET-MIN-VALUE': {
      return {
        ...state,
        min: action.value
      }
    }
    case "SET-MAX-VALUE": {
      return {
        ...state,
        max: action.value
      }
    }
    case "SET-COUNT": {
      return {
        ...state,
        count: action.value
      }
    }
    default: return state
  }
}

export const setCountAC = (value: number) => {
  return {type: 'SET-COUNT', value} as const
}
export const incValueAC = () => {
  return {type: 'INC-VALUE'} as const
}
export const resetValueAC = () => {
  return {type: 'RESET-VALUE'} as const
}
export const setMinInputValueAC = (value: number) => {
  return {type: 'SET-MIN-VALUE', value} as const
}
export const setMaxInputValueAC = (value: number) => {
  return {type: 'SET-MAX-VALUE', value} as const
}