import React from 'react';
import '../styles/congrats.css';
import {Button} from 'antd';
import { useHistory } from 'react-router-dom';

export default function CongratulationPage() {
    const history = useHistory();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const result = JSON.parse(localStorage.getItem('scoreData'));
    const scoreInfoArr = JSON.parse(localStorage.getItem('scoreInfo'));
    const winPhraze = "Congratulations! You won!";
    const lostPhraze = "Sorry, you lost!"

    function handlerNewGame(){
        history.push('/welcome');
    }

    function handlerRecords(){
        let scoreItem = {
            uName: userData.userName,
            uLastName: userData.userLastName,
            uFlips: result.flips,
            uTime: result.time
        }
        if(scoreInfoArr){
            scoreInfoArr.push(scoreItem);
            localStorage.setItem('scoreInfo', JSON.stringify(scoreInfoArr));
        }else {
            let recordsArr = [];
            recordsArr.push(scoreItem);
            localStorage.setItem('scoreInfo', JSON.stringify(recordsArr));
        }
        history.push('/records');
    }

    return (
        <div className="wrapp-congrats">
            <p className="endSlogan">Game over!</p>
            <p className="resultMessage">{result.won ? winPhraze : lostPhraze}</p>
            <div className="score">
                <p>Flips:&nbsp;{result.flips}</p>
                <p>Time:&nbsp;{result.time}</p>
            </div>
            <div className="tabs-congrats">
                <div className="first-btn">
                    <Button type='default' onClick={handlerNewGame} className="btn-congrats">One more game</Button>
                </div>
                &nbsp;
                <div className="second-btn">
                    <Button type='default' onClick={handlerRecords} className="btn-congrats">Show records</Button>
                </div>
            </div>
        </div>
    )
}
