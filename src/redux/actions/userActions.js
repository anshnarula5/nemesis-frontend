import axios from "axios";
import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../types";
import { setAlert } from "./alertAction";

const URL = "https://nemesis-backend123.herokuapp.com/api/user";

export const addUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_USER_REQUEST });
    const res = await axios.post(`${URL}`, formData);
    dispatch({type: ADD_USER_SUCCESS, payload: res.data});
    dispatch(setAlert("User added successfully!", "success"));
    
  } catch (error) {
    dispatch(
      setAlert(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        "danger"
      )
    );
    dispatch({
      type: ADD_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const res = await axios.get(`${URL}`);
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch(
      setAlert(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        "danger"
      )
    );
    dispatch({
      type: GET_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
    console.log(id)
    const res = await axios.delete(`${URL}/${id}`);
    dispatch({type: DELETE_USER_SUCCESS, payload: res.data});
    dispatch(setAlert("User deleted", "success"));
    
  } catch (error) {
    dispatch(
      setAlert(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        "danger"
      )
    );
    dispatch({
      type: DELETE_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
