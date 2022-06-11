import { CONNECT_SOCKETIO, ALL_MESSAGE, RECIVER_ID, ADD_MESSAGES } from "../Constants/SocketContants";

export const setSocketReducer = (state = null, { type, payload }) => {
  switch (type) {
    case CONNECT_SOCKETIO:
      return payload;
    default:
      return state;
  }
};

export const saveMessageReducer = (state=[],{type, payload})=>{
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

  console.log(payload);
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  switch (type) {
    case ALL_MESSAGE:
      return payload;
    case ADD_MESSAGES:
      return [...state, payload]
    
    default:
      return state;
  }
}

export const setReceiverId = (state=null,{type, payload})=>{
  switch (type) {
    case RECIVER_ID:
      return payload;
    
    default:
      return state;
  }
}