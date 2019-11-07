import {combineReducers} from "redux";

import houses from "./houses";
import collection from "./collection";
import collectionShow from "./collectionShow";
import collectionRent from "./collectionRent";
import options from "./options";

const rootReducer = combineReducers({
    houses,
    collection,
    collectionRent,
    collectionShow,
    options
});

export default rootReducer;