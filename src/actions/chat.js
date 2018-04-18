import * as request from "superagent"
import {baseUrl} from "../constants"

export const MESSAGE_SENT = 'MESSAGE_SENT'

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