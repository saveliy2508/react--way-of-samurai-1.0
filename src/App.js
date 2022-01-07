import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Side from './components/Navbar/Side';
import Main from './components/Profile/Main';
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className='social'>
          <Header />
          <Side  friends={props.state.sidebar.friends} />
          <div className="content-wrapper">
            <Routes>
              <Route path='/profile/*' element={<Main postsData={props.state.profilePage.postsData} addPost={props.state.profilePage.addPost} updateNewPost={props.state.profilePage.updateNewPost} newPostText={props.state.profilePage.newPostText} />} />
              <Route path='/message/*' element={<Dialogs messagesData={props.state.dialogsPage.messagesData} dialogsData={props.state.dialogsPage.dialogsData} addMessage={props.state.dialogsPage.addMessage} updateNewMessage={props.state.dialogsPage.updateNewMessage} newMessageText={props.state.dialogsPage.newMessageText}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
