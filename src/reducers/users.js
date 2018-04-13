import { FETCH_ALL_USERS, FETCH_PENDING_USERS } from "../actions/users";

export default function(state = [], { type, payload } = {}) {
  switch (type) {
    case FETCH_ALL_USERS:
      return payload;
    case FETCH_PENDING_USERS:
      return payload;
    default:
      return state;
    }
  }
