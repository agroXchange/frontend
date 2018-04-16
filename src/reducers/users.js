import { FETCH_ALL_USERS, FETCH_PENDING_USERS, DELETE_USER , APPROVE_USER} from "../actions/users";

export default function(state = [], { type, payload } = {}) {
  switch (type) {
    case FETCH_ALL_USERS:
      return payload;
    case FETCH_PENDING_USERS:
      return payload;
    case DELETE_USER:
      return payload
    case APPROVE_USER:
      return payload
    default:
      return state;
    }
  }
