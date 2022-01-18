import React from "react";
import DialogItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    let messageElements = state.dialogsPage.messagesData
        .map(m => <Messages message={m.message} key={m.id} />);
    let dialogsElements = state.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    return {
        dialogsPage: state.dialogsPage,
        messageElements: messageElements,
        dialogsElements: dialogsElements,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (e) => {
            let text = e.currentTarget.value;
            dispatch(updateNewMessageActionCreator(text))
        },
        dispatch: dispatch,
    }
};


const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;