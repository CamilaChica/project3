import {actionTypes} from "~/constants";

export const instialState = {
    list: [],
    quantity: {}
};

const collectList = (state = initialState.list, action) =>{
    const index = state.indexOf(action.name);
    switch(action.type){
        case actionTypes.AUTO_COLLECT:
        if(index !== -1){
            return state;
        } 

        return [...state, action.name];

        default:
            return state;

    }
};

const collectQuantity = (state = initialState.quantity, action) =>{
    switch(action.type){
        case actionTypes.AUTO_COLLECT:
            return{
                ...state,
                [action.name]: (state[action.name] || 0) + 1,
            };


        default:
            return state;

    }
};

const autoCollect = (state = initialState, action) => ({
    list: collectList(state.list, action),
    quantity: collectQuantity(state.quantity, action),
});

export default autoCollect;