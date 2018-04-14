import { FETCH_USER, UPDATE_USER, APPROVE_USER, DELETE_USER} from "../actions/users"

export default function(state = null, { type, payload } = {}) {
  switch (type) {
    case FETCH_USER:
      return payload
    case UPDATE_USER:
      return {
        ...state,
        [payload.id]: payload
      }
    case APPROVE_USER:
      return payload
    case DELETE_USER:
      return payload
    default:
      return state
    }
  }
