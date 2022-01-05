import React from "react";
import s from './Dialogs.module.scss'
import DialogItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
    let messageElements = props.messagesData
        .map(m => <Messages message={m.message} />)

    let dialogsElements = props.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    return (
        <div className={s.dialogs}>
            <div>{dialogsElements}</div>
            <div>{messageElements}</div>
        </div>
    )
}

export default Dialogs;