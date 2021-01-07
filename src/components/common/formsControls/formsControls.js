import React from 'react'
import s from './formsControls.module.css'

const FormControl = Element => ({input, meta, element, ...rest}) => {
    return (
        <div className={meta.error ? s.formControl+" "+ s.error : s.formControl}>
            {meta.error && <span>{meta.error}</span>}
            <Element {...input} {...rest}/>
        </div>
    )
}
export const Input = FormControl("input")
