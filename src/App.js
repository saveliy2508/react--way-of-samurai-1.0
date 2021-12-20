import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Side from './components/Navbar/Side';
import Main from './components/Profile/Main';
import Dialogs from './components/Dialogs/Dialogs'

const App = () => {
  return (
    <div className="wrapper">
      <div className='social'>
        <Header />
        <Side />
        <div className="content-wrapper">
          <Dialogs />
        </div>
        {/* <Main /> */}
      </div>
    </div>
  )
};

export default App;
