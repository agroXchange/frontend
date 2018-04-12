import * as request from "superagent";

const baseUrl = "http://localhost:4008";

export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_PENDING_USERS= "FETCH_PENDING_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const APPROVE_USER = "APPROVE_USER";
export const DELETE_USER = "DELETE_USER"
export const FETCH_USER = "FETCH_USER";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGOUT = "USER_LOGOUT"

export const fetchUsers = () => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/users`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCH_ALL_USERS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};

export const fetchPendingUsers = () => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/admin/users/pending`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: FETCH_PENDING_USERS,
        payload: response.body
      })
    )
    .catch(err => alert(err));
};


export const updateUser = (id, updates) => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

 request
   .patch(`${baseUrl}/admin/users/${id}`)
   .set("Authorization", `Bearer ${jwt}`)
   .send(updates)
   .then(response => {
      dispatch({ type: UPDATE_USER, payload: response.body})
    })
}

export const approveUser = (id, updates) => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

 request
   .patch(`${baseUrl}/admin/users/${id}/approve`)
   .set("Authorization", `Bearer ${jwt}`)
   .send(updates)
   .then(response => {
      dispatch({ type: APPROVE_USER, payload: response.body})
    })
}

export const deleteUser = (id) => (dispatch,getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .delete(`${baseUrl}/admin/users/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => {
      dispatch({ type: DELETE_USER, payload: id })
    })
}

export const fetchUser = (userId) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/users/${userId}`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: FETCH_USER,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

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
