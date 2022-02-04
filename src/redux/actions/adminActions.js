import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

const URL = "https://nemesis-backend123.herokuapp.com/api/admin";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADMIN_LOGIN_REQUEST });
      const res = await axios.post(`${URL}/login`, { email, password });
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data });
      console.log(res.data);
      localStorage.setItem("adminInfo", JSON.stringify(res.data));
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
        type: ADMIN_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const register =
  ({ email, password, name }) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADMIN_REGISTER_REQUEST });
      const res = await axios.post(URL, { email, password, name });
      dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: res.data });
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data });
      console.log(res.data);

      localStorage.setItem("adminInfo", JSON.stringify(res.data));
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
        type: ADMIN_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
