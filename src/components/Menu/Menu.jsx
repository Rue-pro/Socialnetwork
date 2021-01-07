import React from 'react';
import s from './Menu.module.css'
import { NavLink } from 'react-router-dom';

let Menu = () => {
    return (
        <div className={s.menu} >
            <div className={s.menu_item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.menu_item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.menu_item}>
                <NavLink to="/users" activeClassName={s.active}>Find users</NavLink>
            </div>
        </div>
    )
}

export default Menu