import React from 'react'
import { connect } from "react-redux"
import { reduxForm, Field } from 'redux-form'
import {required, maxLengthCreator} from '../../utils/validators/validators'
import { Input } from '../common/formsControls/formsControls'
import {login} from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import s from '../common/formsControls/formsControls.module.css'

const maxLength10 = maxLengthCreator(10)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                component={Input} 
                name="email" 
                placeholder="login" 
                type="text" 
                validate = {[required]}/>
            </div>
            <div>
                <Field component="input" name="password" placeholder="password" type="password" />
            </div>
            <div>
                <Field component="input" name="rememberMe" type="checkbox"/> Remember me
            </div>
            {props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData)
    }
    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mstp = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mstp, {login})(Login)