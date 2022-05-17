import { SET_USER, LOGOUT_USER } from "../Constants/UserInfoConstant";

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
