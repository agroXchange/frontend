import * as request from "superagent";

const baseUrl = "http://localhost:4008";


export const FETCH_ALL_USERS = "FETCH_ALL_USERS";


export const fetchUsers = () => (dispatch) => {
  // const state = getState();
  // const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/users`)
    // .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ALL_USERS,
      payload: response.body
    }))
    .catch(err => alert(err))
}
