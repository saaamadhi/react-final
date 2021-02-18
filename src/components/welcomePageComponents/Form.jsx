import React, {useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import GameOptions from './formComponents/GameOptions';
import { Button} from 'antd';
import '../../styles/welcomePage.css';

export default function Form() {
    const history = useHistory();
    const userName = useRef();
    const userLastName = useRef();
    const userEmail = useRef();
    const [emailError, setEmailError] = useState('');
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    function UserData() {
        return (
            <div className="input-wrapper">
                <div  className='inputWrapp'>
                    <input className="input-c-ud" ref={userName} type='text' placeholder="Name..." name="name" required/>
                    <label htmlFor="name" className="input-label">Name</label>
                </div>
                <div  className='inputWrapp'>
                    <input className="input-c-ud" ref={userLastName} type='text' placeholder="Last Name..." name="lastname" required/>
                    <label htmlFor="lastname" className="input-label">Last name</label>
                </div>
                <div  className='inputWrapp'>
                    <input className="input-c-ud" ref={userEmail} type='email' placeholder="Email..." name="email" required/>
                    <label htmlFor="email" className="input-label">Email</label>
                    <div className='error-input'>{emailError}</div>
                </div>
            </div>
        )
    }
    
    function subFoo(){
        if(userData){
            history.push('/game');
        }else {
            const isValidEmail = validEmail(userEmail.current.value);
            if(isValidEmail){
                setEmailError('')
                const uData = { 
                    userName: userName.current.value,
                    userLastName: userLastName.current.value,
                    userEmail: userEmail.current.value
                };
                localStorage.setItem('userData', JSON.stringify(uData));
                history.push('/game');
            }else{
                setEmailError('*Not valid email!');
            }
        }
    }

    const validEmail = (value) => {
        const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const valid = re.test(value);
        return valid;
    }

    return (
        <>   
            <p className="start-game-text">*Fill fields to start game*</p>
            {userData ? "": <UserData/>}
            <GameOptions/>
            <div>
                <Button type="primary" className='submitBtn' onClick={subFoo}>Start game</Button>
            </div>
        </>
    )
}