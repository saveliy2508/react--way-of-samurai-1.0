import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _rerenderEntireTree() {
        ReactDOM.render(
            <React.StrictMode>
                <App store={store} state={store.getState()} dispatch={store.dispatch} />
            </React.StrictMode>,
            document.getElementById('root')
        );
    },
    _state: {
        sidebar: {
            friends: [
                { id: 1, picture: "https://sib.fm/storage/article/August2021/rOjSxMVNU3mI5yq2ZZAr.jpg", name: 'Vitya' },
                { id: 2, picture: "http://fotogora.ru/wp-content/uploads/2014/07/by-Elena-Shumilova.jpg", name: 'Sveta' },
                { id: 3, picture: "https://www.fotoprizer.ru/img/111116-112740-ft.jpg", name: 'Gena' }
            ]
        },
        profilePage: {
            postsData: [
                { id: 1, message: "Hi, how are you!", likes: "15" },
                { id: 2, message: "I am a programmer", likes: "20" },
            ],
            newPostText: 'qq',
        },

        dialogsPage: {
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
        },
    },

    getState() {
        return store._state;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: store._state.profilePage.newPostText,
                likes: 0
            }
            store._state.profilePage.postsData.push(newPost)
            store._state.profilePage.newPostText = ''
            store._rerenderEntireTree(store._state)
        } else if (action.type === 'UPDATE-NEW-POST') {
            store._state.profilePage.newPostText = action.newText;
            store._rerenderEntireTree(store._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: store._state.dialogsPage.newMessageText,
            }
            store._state.dialogsPage.messagesData.push(newMessage)
            store._state.dialogsPage.newMessageText = ''
            store._rerenderEntireTree(store._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            store._state.dialogsPage.newMessageText = action.newText;
            store._rerenderEntireTree(store._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text,
    }
}

export const addMessageActionCreator = () => ({type:ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newText: text,
})

export default store;
window.store = store;