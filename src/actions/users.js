import * as request from "superagent";

const baseUrl = "http://localhost:4008";

export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGOUT = "USER_LOGOUT"

export const fetchUsers = () => dispatch => {
  // const state = getState();
  // const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/users`)
    // .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCH_ALL_USERS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const login = (email, password) => dispatch =>
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      });
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });

export const signup = newUser => dispatch =>
  request
    .post(`${baseUrl}/users`)
    .send(newUser)
    .then(result => {
      dispatch({
        type: USER_SIGNUP_SUCCESS
      });
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_SIGNUP_FAILED,
          payload: err.response.body.message || "Unknown error"
        });
      } else {
        console.error(err);
      }
    });

export const logout = () => ({
  type: USER_LOGOUT
})
