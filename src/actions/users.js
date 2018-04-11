import * as request from 'superagent'
// import {baseUrl} from '../constants'

// export const ADD_USER = 'ADD_USER'
// export const UPDATE_USER = 'UPDATE_USER'
// export const UPDATE_USERS = 'UPDATE_USERS'

// export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
// export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
//
// export const USER_LOGOUT = 'USER_LOGOUT'

const baseUrl = 'http://localhost:4008'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

// export const logout = () => ({
//   type: USER_LOGOUT
// })

// export const login = (email, password) => (dispatch) =>
// 	request
// 		.post(`${baseUrl}/logins`)
//     .send({email, password})
//     .then(result => {
//       dispatch({
//         type: USER_LOGIN_SUCCESS,
//         payload: result.body
//       })
//     })
//     .catch(err => {
//     	if (err.status === 400) {
//     		dispatch({
//     			type: USER_LOGIN_FAILED,
//     			payload: err.response.body.message || 'Unknown error'
//     		})
//     	}
//     	else {
//     		console.error(err)
//     	}
//     })

export const signup = (newUser) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send(newUser)
		.then(result => {
			dispatch({
				type: USER_SIGNUP_SUCCESS
			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: USER_SIGNUP_FAILED,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
		})

// export const getUsers = () => (dispatch, getState) => {
//   const state = getState()
//   const jwt = state.currentUser.jwt
//
//   request
//     .get(`${baseUrl}/users`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .then(result => {
//       dispatch({
//         type: UPDATE_USERS,
//         payload: result.body
//       })
//     })
//     .catch(err => console.error(err))
// }
