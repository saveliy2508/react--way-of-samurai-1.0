import React from "react";
import s from './Dialogs.module.scss'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div>{props.dialogsElements}</div>
            <div>{props.messageElements}
                <input type='text' value={props.dialogsPage.newMessageText} onChange={props.onMessageChange}></input>
                <button onClick={props.onAddMessage}>send a mess</button>
            </div>
        </div>
    )
}

export default Dialogs;