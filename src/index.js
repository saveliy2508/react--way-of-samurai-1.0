import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/redux/state.js'

let postsData = [
  { id: 1, message: "Hi, how are you!", likes: "15" },
  { id: 2, message: "I am a programmer", likes: "20" },
]

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'How is your React?' },
]

let dialogsData = [
  { id: '1', name: 'Dima' },
  { id: '2', name: 'Masha' },
  { id: '3', name: 'Sasha' },
  { id: '4', name: 'Ira' },
  { id: '5', name: 'Petya' },
  { id: '6', name: 'Vasya' },
]


ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
