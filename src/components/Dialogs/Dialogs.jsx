import React from "react";
import s from './Dialogs.module.scss'
import DialogItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    let dialogsData = [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Masha' },
        { id: '3', name: 'Sasha' },
        { id: '4', name: 'Ira' },
        { id: '5', name: 'Petya' },
        { id: '6', name: 'Vasya' },
    ]

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is your React?' },
    ]

    let messageElements = messagesData
        .map(m => <Messages message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;