import React from 'react';
import '../styles/records.css';
import {Button} from 'antd';
import { useHistory } from 'react-router-dom';

export default function RecordsPage() {
    const history = useHistory();
    const scoreInfo = JSON.parse(localStorage.getItem('scoreInfo'));
    function handlerClick(){
        history.push('/welcome');
    }

    return (
        <div className="wrapp-scores">
            <h1 className="scores-header">Scores:</h1>
            <div>
                <Button type="dashed" onClick={handlerClick}>Go on welcome page</Button>
            </div>
            <div className="headers-info">
                <p>№</p>
                <p>Name</p>
                <p>Time</p>
                <p>Flips</p>
            </div>
            <div className="wrap-userData">
                {scoreInfo.map((el, index) => {
                    return (
                        <div key={index} style={{margin: '1rem 0'}} className="wrap-user">
                            <p>{index+1}</p>
                            <p>{`${el.uName} ${el.uLastName}`}</p>
                            <p>{el.uTime}</p>
                            <p>{el.uFlips}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
