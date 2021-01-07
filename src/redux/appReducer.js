
import {getAuthUserData} from './authReducer'
const INITIALIZING_SUCCESS = "SET_INITIALIZED"

let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: 
            return state
    }
}
export const initializingSuccess = () => {
    return {
        type: INITIALIZING_SUCCESS
    }
}

export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData())
    .then(()=>{
        dispatch(initializingSuccess())
    })
}
export default appReducer