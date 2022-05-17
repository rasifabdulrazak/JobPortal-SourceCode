import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./Reducers/Index";
import thunk from 'redux-thunk'
// import { decodeJwtToken } from "../Utils/decode.jwt";
// import { composeWithDevTools } from "redux-devtools-extension";
import jwt_decode from "jwt-decode";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const decodeJwtToken = () => {
    if(!localStorage.getItem("accessToken")) return null

    const access = jwt_decode(localStorage.getItem("accessToken"))
    return{
        userId: access.user_id,
        isStaff: access.is_staff,
        }
}


const initialState = {
    
    userId: decodeJwtToken(), 

}

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;