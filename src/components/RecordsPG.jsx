import React from 'react';

export default function RecordsPage() {
    const scoreInfo = JSON.parse(localStorage.getItem('scoreInfo'));

    return (
        <div className="wrapp-scores">
            <h1>Scores:</h1>
            <div className="headers-info">
                <p>№</p>
                <p>Name</p>
                <p>Time</p>
                <p>Flips</p>
            </div>
            <div>
                {scoreInfo.map((el, index) => {
                    return (
                        <div className="userData" key={index}>
                            <p>{index}</p>
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
