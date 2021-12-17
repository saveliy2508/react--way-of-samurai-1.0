import React from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="wrapper">
      <div className='social'>
        <Header />
        <div className="side-bar">
          <ul className="side-bar__menu">
            <li className="side-bar__link">
              Profile
            </li>
            <li className="side-bar__link">
              Message
            </li>
            <li className="side-bar__link">
              News
            </li>
            <li className="side-bar__link">
              Music
            </li>
            <li className="side-bar__link">
              Settings
            </li>
          </ul>
        </div>
        <main className="content">
          <img className="content__img" src="https://thumbs.dreamstime.com/b/%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B8-%D0%B0%D1%81%D1%84%D0%B0%D0%BB%D1%8C%D1%82%D0%B0-%D0%B2-%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9-%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0-214241529.jpg" alt=""></img>
          <div className='content__avatar'><img className='content__avatar-wrapper' src='https://peterburg2.ru/uploads/20/02/03/ga11_1_16.jpg' alt=''></img></div>
          <div className='content__posts'>
            YOUR NEWS
            <div className='content__new-post'>New post</div>
          </div>
        </main>
      </div>
    </div>
  )
};

export default App;
