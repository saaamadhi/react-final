import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button} from 'antd';
import '../styles/records.css';

export default function RecordsPage() {
    const history = useHistory();
    const scoreInfo = JSON.parse(localStorage.getItem('scoreInfo'));

    function handlerClick(){
        history.push('/welcome');
    }

    const btnStyle = {
        fontWeight: 'bold',
        background: `linear-gradient(217deg, rgba(221, 132, 233, 0.8), rgba(169, 248, 228, 0) 70.71%),
        linear-gradient( 127deg, rgba(233, 132, 194, 0.8), rgba(200, 238, 228, 0) 70.71%),
        linear-gradient( 336deg, rgba(253, 163, 90, 0.8), rgba(129, 223, 198, 0.4) 70.71%)`
    }

    return (
        <div className="wrapp-scores">
            <h1 className="scores-header">Scores:</h1>
            <div>
                <Button type="dashed" onClick={handlerClick} style={btnStyle}>Go on welcome page</Button>
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