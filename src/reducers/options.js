import {actionTypes} from "~/constants";

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.OPEN_OPTIONS:
            return{
                ...state,
                name: action.name,
            };
        
        case actionTypes.CLOSE_OPTIONS:
            return{
                ...state,
                name: undefined,
            };  
            
        default:
            return state;
    }
};