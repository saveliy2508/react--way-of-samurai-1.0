import React from "react";
import s from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className="dialog_item">
            <NavLink to={"/message/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name='Dima' id='1' />
                <DialogItem name='Masha' id='2' />
                <DialogItem name='Sasha' id='3' />
                <DialogItem name='Ira' id='4' />
                <DialogItem name='Petya' id='5' />
                <DialogItem name='Vasya' id='6' />
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>How is your React?</div>
            </div>
        </div>
    )
}

export default Dialogs;