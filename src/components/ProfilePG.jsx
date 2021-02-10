import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Button} from 'antd';
import '../styles/profile.css';

export default function UserProfile() {
    const history = useHistory();
    const userData = JSON.parse(localStorage.getItem('userData'));
    function handlerLogOut(){
        localStorage.removeItem('userData');
        history.push('/welcome');
    }

    return (
        <div className="wrappProfile">
            <header>
                <span className='game-name'>Mmg</span>
                <Link to="/welcome" className="goback-link">Go Back</Link>
            </header>

            <h1 className="greetingProfile">Nice to see you, {userData.userName}!</h1>
            <div className="section">
                <p className="labelInformationProfile">Information about your account:</p>
                <p><span className="initInfoProfile">Name:</span>&nbsp;{userData.userName}</p>
                <p><span className="initInfoProfile">Last Name:</span>&nbsp;{userData.userLastName}</p>
                <p><span className="initInfoProfile">Email:</span>&nbsp;{userData.userEmail}</p>
            </div>

            <div className="sectionProfile">
                <Button type='primary' onClick={handlerLogOut} className="logOutBtnProfile">Leave account!</Button>
            </div>
        </div>
    )
}
