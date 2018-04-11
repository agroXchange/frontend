import { FETCH_ORDER } from "../actions/orders";

export default function(state = [], { type, payload } = {}) {
  switch (type) {
    case FETCH_ORDER:
      return payload;
    default:
      return state;
    }
  }
