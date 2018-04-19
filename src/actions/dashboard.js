import * as request from "superagent"
import {baseUrl} from "../constants"

export const FETCH_DASHBOARD = 'FETCH_DASHBOARD'

export const fetchDashboard = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/dashboard`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: FETCH_DASHBOARD,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
