import {actionTypes} from "~/constants";

export const instialState = {
    list: [],
    quantity: {}
};

const houseList = (state = initialState.list, action) =>{
    const index = state.indexOf(action.name);
    switch(action.type){
        case actionTypes.BUY_HOUSE:
        if(index !== -1){
            return state;
        } 

        return [...state, action.name];

        default:
            return state;

    }
};

const houseQuantity = (state = initialState.quantity, action) =>{
    switch(action.type){
        case actionTypes.BUY_HOUSE:
            return{
                ...state,
                [action.name]: (state[action.name] || 0) + 1,
            };


        default:
            return state;

    }
};

const houses = (state = initialState, action) => ({
    list: houseList(state.list, action),
    quantity: houseQuantity(state.quantity, action),
});

export default houses;