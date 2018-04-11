import * as request from "superagent";

const baseUrl = "http://localhost:4008";


export const FETCH_ALL_ORDERS = "FETCH_ALL_ORDERS";
export const FETCH_ORDER = "FETCH_ORDER"


export const fetchAllOrders = () => (dispatch) => {
  // const state = getState();
  // const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/orders`)
    // .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ALL_ORDERS,
      payload: response.body
    }))
    .catch(err => alert(err))
}


export const fetchOrder = (id) => (dispatch) => {
  // const state = getState();
  // const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/orders/${id}`)
    // .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ORDER,
      payload: response.body
    }))
    .catch(err => alert(err))
}
