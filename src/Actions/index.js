import { actionTypes} from "~/constants";


export const addHouse = (name, amount) =>
({type: actionTypes.ADD_HOUSE, name, amount});

export const sellHouse = (name, amount)  =>
({type: actionTypes.SELL_HOUSE, name, amount});

export const openOptions = name  =>
({type: actionTypes.OPEN_OPTIONS, name});

export const closeOptions = ()  =>
({type: actionTypes.CLOSE_OPTIONS});

export const addAgent = (name, price) =>
({type: actionTypes.ADD_AGENT, name, price});

export const seller = (name, price) =>
({type: actionTypes.ADD_SELLER, name, price});
