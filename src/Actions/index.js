import { actionTypes} from "~/constants";


export const buyHouse = (name, amount) =>
({type: actionTypes.BUY_HOUSE, name, amount});

export const sellHouse = (name, amount)  =>
({type: actionTypes.SELL_HOUSE, name, amount});

export const openOptions = name  =>
({type: actionTypes.OPEN_OPTIONS, name});

export const closeOptions = ()  =>
({type: actionTypes.CLOSE_OPTIONS});

export const autoCollect = (name, price) =>
({type: actionTypes.AUTO_COLLECT, name, price});

export const collectRent = (name, amount) =>
({type: actionTypes.COLLECT_RENT, name, amount});
