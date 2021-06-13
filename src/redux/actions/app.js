import { USER_LOGIN, USER_LOGOUT } from "redux/actionTypes";

export const userLogin = user => ({
  type: USER_LOGIN,
  payload: {
    user
  }
});

export const userLogout = user => ({
  type: USER_LOGOUT,
  payload: { user }
});
