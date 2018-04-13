import {USER_LOGIN_SUCCESS, USER_LOGOUT} from "../actions/users"
import {localStorageJwtKey, localStorageId } from "../constants"

let initialState = null
try {
  const jwt = localStorage.getItem(localStorageJwtKey)
  const id = localStorage.getItem(localStorageId)
  if (jwt && id) {
    initialState = { jwt, id }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return payload
    case USER_LOGOUT:
      return null
    default:
      return state
  }
}
