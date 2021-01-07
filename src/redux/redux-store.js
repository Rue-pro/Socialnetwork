import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as FormReducer} from 'redux-form'

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    auth: authReducer,
    app: appReducer,
    form: FormReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.state=store.getState()
export default store