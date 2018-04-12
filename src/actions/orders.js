import * as request from "superagent";

const baseUrl = "http://localhost:4008";


export const FETCH_ALL_ORDERS = "FETCH_ALL_ORDERS";
export const FETCH_ORDER = "FETCH_ORDER"
export const FETCH_ORDERS_BY_BUYERID = "FETCH_ORDERS_BY_BUYERID";
export const CREATE_ORDER = "CREATE_ORDER"

export const createOrder = (order, productId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/products/${productId}/orders`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(order)
    .then(response => dispatch({
      type: CREATE_ORDER,
      payload: response.body
    }))
}

export const fetchAllOrders = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ALL_ORDERS,
      payload: response.body
    }))
    .catch(err => alert(err))
}


export const fetchOrder = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ORDER,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchOrdersByBuyerId = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ORDERS_BY_BUYERID,
      payload: response.body
    }))
    .catch(err => alert(err))
}
