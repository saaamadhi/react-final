import React, {useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import GameOptions from './formComponents/GameOptions';
import '../../styles/welcomePage.css';
import {Input, Button} from 'antd';

export default function Form() {
    const history = useHistory();
    const name = useRef();
    const lastName = useRef();
    const email = useRef();
    const [emailError, setEmailError] = useState('');
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    function UserData() {
        return (
            <div>
                <div  className='inputWrapp'>
                    <Input ref={name} type='text' placeholder="Name..." required/>
                </div>
                <div  className='inputWrapp'>
                    <Input ref={lastName} type='text' placeholder="Last Name..." required/>
                </div>
                <div  className='inputWrapp'>
                    <Input ref={email} type='email' placeholder="Email..."  required/>
                    <div style={{color: 'red'}}>{emailError}</div>
                </div>
            </div>
        )
    }
    
    function subFoo(){
        if(userData){
            history.push('/game');
        }else {
            const isValid = validEmail(email.current.state.value);
            if(isValid){
                setEmailError('')
                const uData = { 
                    userName: name.current.state.value,
                    userLastName: lastName.current.state.value,
                    userEmail: email.current.state.value
                };
                localStorage.setItem('userData', JSON.stringify(uData));
                history.push('/game');
            }else {
                setEmailError('Not valid email!');
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
            {userData ? "": <UserData/>}
            <GameOptions/>
            <div>
                <Button type="primary" className='submitBtn' onClick={subFoo}>Start game</Button>
            </div>
        </>
    )
}