import React from "react";
import s from './../Dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/message/" + props.id} className={nav => nav.isActive ? s.active : s.link}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;