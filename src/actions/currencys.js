import * as request from "superagent"
import {baseUrl} from "../constants"

export const FETCH_CURRENCY = "FETCH_CURRENCY"

export const fetchCurrency = (name) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .get(`${baseUrl}/currencys/${name}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_CURRENCY,
      payload: response.body
    }))
}
