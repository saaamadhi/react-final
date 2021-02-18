import React from 'react';
import {Select} from 'antd';
import {difficultyLevels, cardShirts} from '../../constants';
import {diffLevels, cardShirtOptions} from '../../../actions/welcomePG';
import {useDispatch} from 'react-redux';
import '../../../styles/gameOption.css';
const {Option} = Select;

export default function GameOptions() {
    const dispatch = useDispatch();
    
    function handlerBtns(value){
        dispatch(cardShirtOptions(value));
    }

    function handlerSelect(value){
        console.log(value);
        dispatch(diffLevels(value));
    }

    return (
        <>
            <div className='difficultySelector'>
                <p className="label-diff">Difficulty:</p>
                <Select defaultValue='hard' onChange={(e) => handlerSelect(e)}>
                    {difficultyLevels.map((level)=>{
                        return(
                            <Option key={level}>{level}</Option>
                        )
                    })}
                </Select>
            </div>

            <div className="card-shirt-wrapp">
                <p className="label-shirt">Select card shirt:</p>
                <div className='cardShirtBtn__wrapper'>
                    {cardShirts.map((shirt, index)=>{
                        return(
                            <button key={index}
                                type="button"
                                className='cardShirt'
                                value={shirt}
                                onClick={(e) => handlerBtns(e.target.value)}
                            >{shirt}
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
