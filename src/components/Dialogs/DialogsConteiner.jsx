import React from "react";
import DialogItem from './DialogsItem/DialogsItem'
import Messages from './Messages/Messages'
import { addMessageActionCreator, updateNewMessageActionCreator } from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from "../../StoreContext";


const DialogsConteiner = () => {

    return (
        <StoreContext.Consumer> 
            {(store) => {
                debugger
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                };

                let onMessageChange = (e) => {
                    let text = e.currentTarget.value;
                    store.dispatch(updateNewMessageActionCreator(text))
                };

                let messageElements = store.getState().dialogsPage.messagesData
                    .map(m => { <Messages message={m.message} /> });

                let dialogsElements = store.getState().dialogsPage.dialogsData
                    .map(d => { <DialogItem name={d.name} id={d.id} /> });

                <Dialogs
                    onAddMessage={addMessage}
                    onMessageChange={onMessageChange}
                    messageElements={messageElements}
                    dialogsElements={dialogsElements}
                    dialogsPage={store.getState().dialogsPage}
                    dispatch={store.dispatch}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsConteiner;