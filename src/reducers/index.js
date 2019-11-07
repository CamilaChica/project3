import {combineReducers} from "redux";

import houses from "./houses";
import collection from "./collection";
import autoCollect from "./collectionShow";
import collectionRent from "./collectionRent";
import options from "./options";

const rootReducer = combineReducers({
    houses,
    collection,
    collectionRent,
    autoCollect,
    options
});

export default rootReducer;