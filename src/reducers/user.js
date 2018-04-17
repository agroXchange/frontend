import {FETCH_USER, UPDATE_LOGO_SUCCESS, UPDATE_USER} from "../actions/users";

export default function(state = null, { type, payload } = {}) {
  switch (type) {
    case FETCH_USER:
      return payload
    case UPDATE_USER:
      return {
        ...state,
        ...payload
      };
    case UPDATE_LOGO_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
