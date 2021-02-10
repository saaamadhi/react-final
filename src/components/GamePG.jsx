import React, {useState, useEffect, useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/gamePage.css';
import {Button} from 'antd';
import {useSelector} from 'react-redux';
import profileImg from '../images/profile.png';

export default function GamePage() {
    const cardEl = useRef();
    let lenOfImgArr = useRef(0);
    const history = useHistory();
    const [cardPairs, setCardPairs] = useState([]);
    const [openCard, setOpenCard] = useState([]);
    const [timeCount, setTimeCount] = useState(0);
    const [flipCount, setFlipCount] = useState(0);
    const [matchedPair, setMatchedPair] = useState([]);
    const [amountOfcards, setAmountOfcards] = useState(0);
    let shirtOption = useSelector(state => state.shirtOption);
    let difficultyLevel = useSelector(state => state.difficultyOption);
    let easy = [], mid = [], hard = [];
    if(shirtOption){
        shirtOption[1][2].forEach(el => easy.push(el));
        shirtOption[1][1].forEach(el => mid.push(el));
        shirtOption[1][0].forEach(el => hard.push(el));
    } else {
        history.push('/welcome')
    }

    function shuffleCards(arr){
        let randomIndex, temp, newArr= [];
        arr.forEach(el => newArr.push(el));
        for(let i = 0; i < newArr.length; i++){
            randomIndex = Math.floor(Math.random() * newArr.length);
            temp = newArr[randomIndex];
            newArr[randomIndex] = newArr[i];
            newArr[i] = temp;
        }
        return newArr;
    }

    function handleFlip(index){
        setOpenCard((opend) => [...opend, index]);
        setFlipCount(flipCount + 1);
    }

    useEffect(() => {
        switch(difficultyLevel.toLowerCase()){
            case 'easy':
                lenOfImgArr.current = 8;
                setAmountOfcards(4);
                setCardPairs(shuffleCards([...easy, ...easy]));
                break;
            case 'midium':
                lenOfImgArr.current = 12;
                setAmountOfcards(6);
                setCardPairs(shuffleCards([...mid, ...mid]));
                break;
            case 'hard':
                lenOfImgArr.current = 16;
                setAmountOfcards(8);
                setCardPairs(shuffleCards([...hard, ...hard]));
                break;
            default: 
                console.log('here')
                break;
        }
    }, [])
    
    useEffect(() => {
        const timerInterval= setInterval(() => {
            setTimeCount(timeCount + 1);
        }, 1000);

        if(timeCount === 5000){
            let winning = false;
            let scoreData = {
                won: winning,
                time: timeCount,
                flips: flipCount
            }
            localStorage.setItem('scoreData', JSON.stringify(scoreData));
            history.push('/congratulations');
        }

        return() => {
            clearInterval(timerInterval);
        }
    }, [timeCount])

    useEffect(() => {
        const firstOpenCard = cardPairs[openCard[0]];
        const secondOpenCard = cardPairs[openCard[1]];
        if(secondOpenCard && firstOpenCard.alt === secondOpenCard.alt){
            setMatchedPair([...matchedPair, firstOpenCard.alt])
        }
        if(openCard.length === 2) setTimeout(() => {
            setOpenCard([]);
            if(cardEl.current !== null){
                cardEl.current.classList.remove('disabled');
            }
        }, 1000)
    }, [openCard])

    function setInitValues(){
        setOpenCard([]); 
        setMatchedPair([]);
        setTimeCount(0);
        setFlipCount(0);
    }

    useEffect(() => {
        if(matchedPair.length === (lenOfImgArr.current)){
            let winning = true;
            let scoreData = {
                won: winning,
                time: timeCount,
                flips: flipCount
            }
            localStorage.setItem('scoreData', JSON.stringify(scoreData));
            setInitValues();
            setAmountOfcards(0);
            lenOfImgArr.current = 0;
            history.push('/congratulations');
        }     
    }, [matchedPair])

    function newGameHandle(){
        history.push('/welcome')
    }

    function restartHandle(){
        setInitValues();
        setCardPairs(shuffleCards(cardPairs));
    }

    return (
        <div className="wrapper">
            <header>
                <span className='game-name'>Mmg</span>
                <Link to="/profile">
                    <img src={profileImg} alt="profile" className="profileImg"/>
                </Link>
            </header>

            <div className="countersWrap">
                <div className='timer'>Time:
                    <span className='timeCounter'>&nbsp;{timeCount}</span>
                </div>
                <div className='stepsCounter'>Flips:
                    <span className='flipCounter'>&nbsp;{flipCount}</span>
                </div>
            </div>

            <div className="cardWrapp" style={{gridTemplate : `repeat(${amountOfcards}, auto) / repeat(${amountOfcards}, auto)`}}>
                {cardPairs.map((card, index) => {
                        let flip = false;
                        if(openCard.includes(index)) flip = true;
                        if(matchedPair.includes(card.alt)) flip = true;
                        return(
                            <div key={index} ref={cardEl} className={`card ${flip ? "flipped disabled" : ""}`} onClick={() => handleFlip(index)}>
                                <div className="front">
                                    <img src={card.src} alt={card.alt} className="img-front"/>
                                </div>
                                <div className="back"></div>
                            </div>
                        );
                    })
                }
            </div>

            <div className="tabs">
                <Button type="default" className="restartBtn" onClick={restartHandle} >Restart</Button>
                <Button type="default" className="againBtn" onClick={newGameHandle}>New game</Button>
            </div>
        </div>
    )
}

//ref={name} 