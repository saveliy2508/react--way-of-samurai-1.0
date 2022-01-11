import React from "react";
import s from './Dialogs.module.scss'
import DialogItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'


const Dialogs = (props) => {
    let newMessageElement = React.useRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type:'ADD-MESSAGE', text: text})
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type:'UPDATE-NEW-MESSAGE', newText: text})
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