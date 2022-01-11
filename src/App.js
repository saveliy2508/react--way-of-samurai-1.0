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
          <Side friends={props.state.sidebar.friends} />
          <div className="content-wrapper">
            <Routes>
              <Route path='/profile/*' element={
                <Main
                  profilePage={props.state.profilePage} />
              } />
              <Route path='/message/*' element={
                <Dialogs
                  dialogsPage={props.state.dialogsPage} />
              } />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
