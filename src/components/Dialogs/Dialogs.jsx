import React from "react";
import s from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom'
const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/message/" + props.id} className={nav => nav.isActive ? s.active : s.link}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Masha' },
        { id: '3', name: 'Sasha' },
        { id: '4', name: 'Ira' },
        { id: '5', name: 'Petya' },
        { id: '6', name: 'Vasya' },
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is your React?' },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <MessageItem message={messagesData[0].message} />
                <MessageItem message={messagesData[1].message} />
                <MessageItem message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;