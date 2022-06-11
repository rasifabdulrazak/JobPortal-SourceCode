import { SET_USER, LOGOUT_USER, GET_ALL_JOB_REQUEST, GET_ALL_JOB_SUCCESS, GET_ALL_JOB_FAIL, PLACE_SORT, EDUCATION_SORT } from "../Constants/UserInfoConstant";

const initialState = null;
export const setUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};


export const getAlljobReducer=(state = { job: [] }, { type, payload })=>{
  switch(type){
    case GET_ALL_JOB_REQUEST:
      return{...state,loading:true}
      case GET_ALL_JOB_SUCCESS:
        return{...state,loading:false,job:payload}
        case GET_ALL_JOB_FAIL:
          return{...state,error:payload}
          case PLACE_SORT:
            return{...state,loading:false,job:payload}
            case EDUCATION_SORT:
              return{...state,loading:false,job:payload}


          default:
            return state
  }

}


export const allJobsData=(state = { fulljobs: [] }, { type, payload })=>{
  switch(type){
  
      case GET_ALL_JOB_SUCCESS:
        return{...state,loading:false,fulljobs:payload}
          default:
            return state
  }

}