import find from "lodash/find";

import {actionTypes} from "~/constants";
import {itemCatalogue} from "~/catalogue";

const initialState = {
    totalMoney = 0,
};

const getItemValue = (itemList, name, amount) =>
find(itemList, {name}).sellPrice*amount;

export default (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.SELL_HOUSE:
            return{
                ...state,
                totalMoney: state.totalMoney + 
                getItemValue(itemCatalogue, action.name, ((action.amount >= 0) ? action.amount : 1)),
            };

            case actionTypes.BUY_HOUSE:
            case actionTypes.AUTO_COLLECT:
                return{
                    ...state,
                    totalMoney: state.totalMoney - action.price,
                };

                default:
                    return state;
    }
}