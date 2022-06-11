import { CONNECT_SOCKETIO,ALL_MESSAGE,RECIVER_ID, ADD_MESSAGES } from "../Constants/SocketContants";


export const connectSocketIO = (data) => (dispatch) => {
    dispatch({
      type: CONNECT_SOCKETIO,
      payload:data
    });
  };

export const allMessage = (data)=>
      async (dispatch) =>{

        dispatch({
          type: ALL_MESSAGE,
          payload:data
        });
        
      }

export const recieverIdAction = (data)=>
        async(dispatch)=>{
          dispatch({
            type:RECIVER_ID,
            payload:data
          })
        }

  export const addMessages = (message)=>
    async(dispatch)=>{
      dispatch({
        type:ADD_MESSAGES,
        payload:message
      })
    }

