import React from 'react';
import '../styles/App.css';
import Form from './welcomePageComponents/Form';
import {Link} from 'react-router-dom';
import profileImg from '../images/profile.png'

export default function WelcomePage() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const score = JSON.parse(localStorage.getItem('scoreData'));
  if(score){
    localStorage.removeItem('scoreData');
  }
  
  function AddHeader(){
    return(
      <header>
            <span className='game-name'>Mmg</span>
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
        <h1>Welcome &nbsp;{userData ? <span className='userFirstName'>{userData.userName + ' ' + userData.userLastName}</span> : ""}
          &nbsp;
          to
          &nbsp;
          <span className='game-name'>Mmg</span>
        </h1>
      </div>

      <form className='welcomeForm'>
        <Form/>
      </form>
    </div>   
  )
}