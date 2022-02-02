import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Side from './components/Navbar/Side';
import UsersPageConteiner from './components/Users/UsersPageConteiner';
import MainConteiner from './components/Profile/MainConteiner';
import DialogsConteiner from './components/Dialogs/DialogsConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className='social'>
          <Header />
          <Side />
          <div className="content-wrapper">
            <Routes>
              <Route path='/profile/:userId' element={
                <MainConteiner />}
              />
              <Route path='/message/*' element={
                <DialogsConteiner />
              } />
              <Route path='/users/*' element={
                <UsersPageConteiner />
              }></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
