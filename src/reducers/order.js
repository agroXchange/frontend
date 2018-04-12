import { FETCH_ORDER, CHANGE_STATUS } from "../actions/orders";

export default function(state = [], { type, payload } = {}) {
  switch (type) {
    case FETCH_ORDER:
      return payload;

    case CHANGE_STATUS:
      return [...state, payload]

      default:
        return state;
    }
  }
