const difficultyOption = (state = 'HARD', action) => {    
    switch(action.type){
        case 'EASY': 
            return state = 'EASY';
        case 'MIDIUM': 
            return state = 'MIDIUM';
        case 'HARD': 
            return state = 'HARD';
        default: 
            return state;
    }
}

const shirtOption = (state = '', action) => {    
    switch(action.type){
        case 'CAKES': 
            return {actionType: action.type, actionPayload: action.payload};
        case 'ANIMALS': 
            return {actionType: action.type, actionPayload: action.payload};
        case 'PLANTS': 
            return {actionType: action.type, actionPayload: action.payload};
        default: 
            return state;
    }
}

export {difficultyOption, shirtOption};