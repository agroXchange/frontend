import * as request from "superagent"
import {baseUrl} from "../constants"

export const MESSAGE_SENT = 'MESSAGE_SENT'
export const GET_MESSAGES = 'GET_MESSAGES'

export const sendMessage = (orderId, message) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/orders/${orderId}/messages`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(message)
    .then(result => {
      dispatch({
        type: MESSAGE_SENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getMessages = (orderId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders/${orderId}/messages`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_MESSAGES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}