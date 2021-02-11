import React from 'react';
import {Select, Button} from 'antd';
import {difficultyLevels, cardShirts, rulesOfTheGame} from '../../constants';
import {diffLevels, cardShirtOptions} from '../../../actions/welcomePG';
import {useDispatch} from 'react-redux';
import '../../../styles/gameOption.css';
const {Option} = Select;

export default function GameOptions() {
    const dispatch = useDispatch();
    
    function handlerBtns(event){
        dispatch(cardShirtOptions(event.target.innerHTML));
        event.target.focus();
    }

    return (
        <>
            <div className='difficultySelector'>
                <p className="label-diff">Difficulty:</p>
                <Select defaultValue='difficult' onChange={(e) => dispatch(diffLevels(e))}>
                    {difficultyLevels.map((level)=>{
                        return(
                            <Option key={level}>{level}</Option>
                        )
                    })}
                </Select>
            </div>

            <div>
                <p className="label-shirt">Select card shirt:</p>
                <div className='cardShirtBtn__wrapper'>
                    {cardShirts.map((shirt, index)=>{
                        return(
                            <Button key={index}
                            type="default"
                            className='cardShirt'
                            onClick={(e) => handlerBtns(e)}>
                                   {shirt}
                            </Button>
                        )
                    })}
                </div>
            </div>

            <div className='rules-wrap'>
                <p className='rules-logo'>Rules</p>
                <p>{rulesOfTheGame}</p>
            </div>
        </>
    )
}
