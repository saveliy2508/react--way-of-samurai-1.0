const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is your React?' },
    ],
    dialogsData: [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Masha' },
        { id: '3', name: 'Sasha' },
        { id: '4', name: 'Ira' },
        { id: '5', name: 'Petya' },
        { id: '6', name: 'Vasya' },
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 4,
            message: state.newMessageText,
        }
        let stateCopy = {
            ...state,
            messagesData: [...state.messagesData],
        };
        stateCopy.messagesData.push(newMessage);
        stateCopy.newMessageText = '';
        return stateCopy;
    } else if (action.type === UPDATE_NEW_MESSAGE) {
        let stateCopy = {...state};
        stateCopy.newMessageText = action.newText;
        return stateCopy;
    }
    return state
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newText: text,
})

export default dialogsReducer;