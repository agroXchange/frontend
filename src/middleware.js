import { localStorageJwtKey, localStorageId } from "./constants"
import {USER_LOGIN_SUCCESS, USER_LOGOUT} from "./actions/users"

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
      localStorage.setItem(localStorageId, action.payload.id)
    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
      localStorage.removeItem(localStorageId)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}
