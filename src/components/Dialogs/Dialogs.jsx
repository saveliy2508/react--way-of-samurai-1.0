import React from "react";
import s from './Dialogs.module.scss'
import DialogItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'


const Dialogs = (props) => {

    let newMessageElement = React.useRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text)
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text)
    }

    let messageElements = props.messagesData
        .map(m => <Messages message={m.message} />)

    let dialogsElements = props.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    return (
        <div className={s.dialogs}>
            <div>{dialogsElements}</div>
            <div>{messageElements}<input type='text' ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange}></input><button onClick={addMessage}>send a messkekw</button></div>
        </div>
    )
}

export default Dialogs;