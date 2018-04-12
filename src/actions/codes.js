import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const FETCH_ALL_CODES = 'FETCH_ALL_CODES'

export const fetchCodes = () => (dispatch) => {
    // const state = getState();USER_SIGNUP_SUCCESS
    // const jwt = state.currentUser.jwt;

    request
        .get(`${baseUrl}/codes`)
        // .set("Authorization", `Bearer ${jwt}`)
        .then(response => dispatch({
            type: FETCH_ALL_CODES,
            payload: response.body
        }))
        .catch(err => alert(err))
}