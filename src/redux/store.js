import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sideReducer from './sideReducer'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _rerenderEntireTree() {
        ReactDOM.render(
            <React.StrictMode>
                <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)} />
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
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sideReducer(this._state.sidebar, action)
        this._rerenderEntireTree(this._state)
    }
}

export default store;
window.store = store;