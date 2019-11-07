import {combineReducers} from "redux";

import houses from "./houses";
import collection from "./collection";
import autoCollect from "./collectionShow";
import inventory from "./inventory";
import options from "./options";

const rootReducer = combineReducers({
    houses,
    collection,
    inventory,
    autoCollect,
    options
});

export default rootReducer;