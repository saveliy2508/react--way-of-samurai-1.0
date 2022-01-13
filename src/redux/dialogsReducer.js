const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 4,
            message: state.newMessageText,
        }
        state.messagesData.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageText = action.newText;
    }
    return state
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newText: text,
})

export default dialogsReducer;