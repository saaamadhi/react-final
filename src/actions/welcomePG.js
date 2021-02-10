import {imgHard as cakesHard, imgMid as cakesMid, imgEasy as cakesEasy} from '../components/gamePageComponents/cakes';
import {imgHard as plantsHard, imgMid as plantsMid, imgEasy as plantsEasy} from '../components/gamePageComponents/plants';
import {imgHard as animalsHard, imgMid as animalsMid, imgEasy as animalsEasy} from '../components/gamePageComponents/animals';

export const diffLevels = (option) => {
    switch(option.toUpperCase()) {
        case 'EASY':
            return {
                type: 'EASY',
            }
        case 'MIDIUM':
            return {
                type: 'MIDIUM'
            }
        case 'DIFFICULT':
            return {
                type: 'HARD'
            }
        default:
            return {
                type: ''
            }
    } 
}

export const cardShirtOptions = (option) => {
    let cakesObj = [cakesHard, cakesMid, cakesEasy];
    let plantsObj = [plantsHard, plantsMid, plantsEasy];
    let animalsObj =[animalsHard, animalsMid, animalsEasy];
    switch(option.toUpperCase()) {
        case 'ANIMALS':
            return {
                type: 'ANIMALS',
                payload: animalsObj
            }
        case 'PLANTS':
            return {
                type: 'PLANTS',
                payload: plantsObj
            }
        case 'CAKES':
            return {
                type: 'CAKES',
                payload: cakesObj
            }
        default:
            return {
                type: ''
            }
    } 
}