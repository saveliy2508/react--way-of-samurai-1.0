import React from 'react';
import './App.css';
import Header from './components/Header';
import Side from './components/Side';
import Main from './components/Main'

const App = () => {
  return (
    <div className="wrapper">
      <div className='social'>
        <Header />
        <Side />
        <Main />
      </div>
    </div>
  )
};

export default App;
