import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
} from "../types";

export const adminLoginReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, adminInfo: payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_REGISTER_REQUEST:
      return { loading: true };
    case ADMIN_REGISTER_SUCCESS:
      return { loading: false, adminInfo: payload };
    case ADMIN_REGISTER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

