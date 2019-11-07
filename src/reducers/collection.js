import {actionTypes, collection as collectionConstants} from "~/constants";

export const instialState = {
    list: [productConstants.FINANCES],
    quantity: {[productConstants.FINANCES]: {qty: 0}}
};

const buyList = (state = initialState.list, action) =>{
    switch(action.type){
        case actionTypes.COLLECT_RENT:
        if(state.indexOf(action.name) !== -1){
            return state;
        }

        return [...state, action.name];

        default:
            return state;

    }
};

const financeQuantity = (state = initialState.quantity, action) =>{
    switch (action.type){
        case actionTypes.COLLECT_RENT:
            return{ 
                ...state,
                    [action.name]: {
                        ...state[action.name],
                        qty: (state[action.name].qty || 0) + ((action.amount >= 0) ? action.amount :1),
                        ...action(action.amount >= 0 && {addingAmount: action.amount}),
                    },
                };
                
            default:
               return state;
        }
};
