import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

let DialogItem = (props) => {
    let path = "/dialogs/user_" + props.id
    return (
        <NavLink className={s.dialog+' '+s.active} to={path}>
            {props.name}
        </NavLink>
    )
}

export default DialogItem