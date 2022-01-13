import React from "react";
import DialogItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'


const DialogsConteiner = (props) => {
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    let messageElements = props.dialogsPage.messagesData
        .map(m => <Messages message={m.message} />)

    let dialogsElements = props.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    return (
        <Dialogs
            onAddMessage={addMessage}
            onMessageChange={onMessageChange}
            messageElements={messageElements}
            dialogsElements={dialogsElements}
            dialogsPage={props.store.getState().dialogsPage}
            dispatch={props.dispatch}
        />
    )
}

export default DialogsConteiner;