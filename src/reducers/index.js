import {combineReducers} from 'redux';
import {difficultyOption, shirtOption} from './welcomePG';

const allReducers = combineReducers({
    difficultyOption,
    shirtOption
})

export default allReducers;