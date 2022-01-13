import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Side from './components/Navbar/Side';
import MainConteiner from './components/Profile/MainConteiner';
import DialogsConteiner from './components/Dialogs/DialogsConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className='social'>
          <Header />
          <Side
            friends={props.store.getState().sidebar.friends}
          />
          <div className="content-wrapper">
            <Routes>
              <Route path='/profile/*' element={
                <MainConteiner
                  store={props.store}
                />}
              />
              <Route path='/message/*' element={
                <DialogsConteiner
                  store={props.store}
                  dialogsPage={props.store.getState().dialogsPage}
                />
              } />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
