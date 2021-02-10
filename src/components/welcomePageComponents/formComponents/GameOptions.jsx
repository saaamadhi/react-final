import React from 'react';
import {Select} from 'antd';
import {Button} from 'antd';
import '../../../styles/gameOption.css';
import {difficultyLevels, cardShirts, rulesOfTheGame} from '../../constants';
import {diffLevels, cardShirtOptions} from '../../../actions/welcomePG';
import {useDispatch} from 'react-redux';
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
                <p>Difficulty:</p>
                <Select defaultValue='difficult' onChange={(e) => dispatch(diffLevels(e))}>
                    {difficultyLevels.map((level)=>{
                        return(
                            <Option key={level}>{level}</Option>
                        )
                    })}
                </Select>
            </div>

            <div>
                <p>Select card shirt:</p>
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
