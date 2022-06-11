import { combineReducers } from "redux";
import { setUserReducer,getAlljobReducer,allJobsData } from "./UserInfoReducer";
import { setSocketReducer,saveMessageReducer, setReceiverId} from "./socketReducer"; 

export const reducer = combineReducers({
  userId: setUserReducer,
  allJobs:getAlljobReducer,
  fullJobs:allJobsData,
  socketIO:setSocketReducer,
  messages:saveMessageReducer,
  recieverId:setReceiverId,
});
