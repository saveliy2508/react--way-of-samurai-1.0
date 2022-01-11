import React from "react";
import s from './Dialogs.module.scss'
import DialogItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../redux/store'


const Dialogs = (props) => {
    let newMessageElement = React.useRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text))
    }

    let messageElements = props.dialogsPage.messagesData
        .map(m => <Messages message={m.message} />)

    let dialogsElements = props.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    return (
        <div className={s.dialogs}>
            <div>{dialogsElements}</div>
            <div>{messageElements}
                <input type='text' ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange}></input>
                <button onClick={addMessage}>send a mess</button>
            </div>
        </div>
    )
}

export default Dialogs;