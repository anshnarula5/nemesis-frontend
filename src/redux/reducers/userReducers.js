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

export const addUserReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_REQUEST:
      return { loading: true };
    case ADD_USER_SUCCESS:
      return { loading: false, success: true };
    case ADD_USER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_USER_REQUEST:
      return { loading: true };
    case DELETE_USER_SUCCESS:
      return { loading: false, success: true };
    case DELETE_USER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const getUsersReducer = (state = {users : []}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, users: payload };
    case GET_USER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
