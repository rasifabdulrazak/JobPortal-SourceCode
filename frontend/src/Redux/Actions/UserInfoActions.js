import axios from "axios";
import { Token } from "../../utils";
import {
  SET_USER,
  LOGOUT_USER,
  GET_ALL_JOB_REQUEST,
  GET_ALL_JOB_SUCCESS,
  GET_ALL_JOB_FAIL,
  PLACE_SORT,
  EDUCATION_SORT,
} from "../Constants/UserInfoConstant";

export const setUser = (data) => (dispatch, getState) => {
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

export const getAlljobs = () => async (dispatch) => {
  console.log("actions");
  dispatch({
    type: GET_ALL_JOB_REQUEST,
  });
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/jobsrender/`);
    dispatch({
      type: GET_ALL_JOB_SUCCESS,
      payload: data,
      
    });
    console.log(data)
  } catch (error) {
    dispatch({
      type: GET_ALL_JOB_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.data.message
          : error.message,
    });
  }
};

export const placeFilter = (place) => async (dispatch, getState) => {
  console.log("place", place);
  const {
    fullJobs: { fulljobs },
  } = getState();
  console.log("fulljobs", fulljobs);
  dispatch({
    type: PLACE_SORT,
    payload: fulljobs.filter((data) => {
      if (data.location === place) return data;
    }),
  });
};

export const educationFilter = (education) => async (dispatch, getState) => {
  console.log("education", education);
  const {
    fullJobs: { fulljobs },
  } = getState();
  console.log("fulljobs", fulljobs);
  dispatch({
    type: EDUCATION_SORT,
    payload: fulljobs.filter((data) => {
      if (data.educational_requirments === education) return data;
    }),
  });
};
