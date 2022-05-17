import { combineReducers } from "redux";
import { setUserReducer } from "./UserInfoReducer";


export const reducer = combineReducers({
    userId: setUserReducer,
});

