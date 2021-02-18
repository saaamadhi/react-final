import React from 'react';
import {Link} from 'react-router-dom';
import Form from './welcomePageComponents/Form';
import profileImg from '../images/profile.png';
import {rulesOfTheGame} from './constants';
import '../styles/App.css';
import '../styles/media.css';

export default function WelcomePage() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const score = JSON.parse(localStorage.getItem('scoreData'));
  if(score){
    localStorage.removeItem('scoreData');
  }
  
  function AddHeader(){
    return(
      <header>
            <div className='logotype'>
              <div className='header-logo-img'></div>
              <span className='game-name'>Mmg</span>
            </div>
            
            <Link to="/profile">
              <img src={profileImg} alt="profile" className="profileImg"/>
            </Link>
      </header>
    )
  }

    return (
    <div className='wrapper'>
      {userData ? <AddHeader/> : ""}
     
      <div className='greeting'>
        <h1>Welcome {userData ? <span className='userFirstName'>{userData.userName + ' ' + userData.userLastName}</span> : ""}
          &nbsp; to the Match-match game
        </h1>
        <div className="game-logo-img"></div>
      </div>

      <div className="main__container">
        <div className='rules-wrap'>
          <p className='rules-logo'>Rules</p>
          <p>{rulesOfTheGame}</p>
        </div>

        <form className='welcomeForm'>
          <Form/>
        </form>
      </div>
    </div>   
  )
}