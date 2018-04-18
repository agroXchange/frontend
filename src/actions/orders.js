import * as request from "superagent"
import {baseUrl} from "../constants"

export const FETCH_ALL_ORDERS = "FETCH_ALL_ORDERS"
export const FETCH_ORDER = "FETCH_ORDER"
export const FETCH_ORDERS_BY_BUYER = "FETCH_ORDERS_BY_BUYER"
export const FETCH_ORDERS_BY_SELLER = "FETCH_ORDERS_BY_SELLER"
export const CREATE_ORDER = "CREATE_ORDER"
export const CHANGE_STATUS = "CHANGE_STATUS"

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
    .get(`${baseUrl}/orders/all`)
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

export const fetchOrdersByBuyer = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ORDERS_BY_BUYER,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchOrdersBySeller = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders/received`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ORDERS_BY_SELLER,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const changeStatus = (data, id) => (dispatch) => (
  request
    .patch(`${baseUrl}/orders/${id}`)
    .send(data)
    .then(response => dispatch({
      type: CHANGE_STATUS,
      payload: response.body
    }))
  )
