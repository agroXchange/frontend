import { FETCH_USER } from "../actions/users";

export default function(state = null, { type, payload } = {}) {
  switch (type) {
    case FETCH_USER:
      return payload;
    default:
      return state;
    }
  }
