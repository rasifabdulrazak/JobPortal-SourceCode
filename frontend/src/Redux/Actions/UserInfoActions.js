import axios from "axios";
import { Token } from "../../utils";
import { SET_USER, LOGOUT_USER } from "../Constants/UserInfoConstant";

export const setUser = (data) =>
 (dispatch, getState) => {

  dispatch({
    type: SET_USER,
    payload: data,
  });
};

export const logoutUser = () => (dispatch) => {

  dispatch({
    type: LOGOUT_USER,
  
  });
  localStorage.removeItem(Token.ACCESS_TOKEN);
};
