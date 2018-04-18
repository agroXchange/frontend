import { localStorageJwtKey } from "./constants"
import {USER_LOGIN_SUCCESS, USER_LOGOUT} from "./actions/users"

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}

export const socketIo = socketio => store => next => action => {
  if (action.type === USER_LOGIN_SUCCESS) {
    const jwt = action.payload.jwt
    socketio.connect(store.dispatch, jwt)
  }
  if (action.type === USER_LOGOUT) {
    socketio.disconnect()
  }

  next(action)
}