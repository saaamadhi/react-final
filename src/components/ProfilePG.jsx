import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Button} from 'antd';
import exitImg from '../images/person-pg-exit-img.png';
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
                <div className='logotype'>
                    <div className='header-logo-img'></div>
                    <span className='game-name'>Mmg</span>
                </div>
                <Link to="/welcome">
                    <img src={exitImg} alt="exit" className="exit-img"/>
                </Link>
            </header>

            <div className="main-info-profile">
                <h1 className="greetingProfile">Nice to see you, {userData.userName}!</h1>
                <div className="section">
                    <p className="labelInformationProfile">Information about your account:</p>
                    <p><span className="initInfoProfile">Name:</span>&nbsp;{userData.userName}</p>
                    <p><span className="initInfoProfile">Last Name:</span>&nbsp;{userData.userLastName}</p>
                    <p><span className="initInfoProfile">Email:</span>&nbsp;{userData.userEmail}</p>
                    <div className="sectionProfile">
                        <Button type='primary' onClick={handlerLogOut} className="logOutBtnProfile">Leave account!</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}