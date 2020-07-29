import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

let DialogItem = (props) => {
    let path = "/dialogs/user_" + props.id
    return (
        <NavLink className={s.dialog+' '+s.active} to={path}>
            {props.name}
        </NavLink>
    )
}
let Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

let Dialogs = () => {
    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                <DialogItem name="Я" id="1"/>
            </div>
            <div className={s.messages}>
                <Message message="This is message"/>
            </div>
        </div>
    )
}

export default Dialogs