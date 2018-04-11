import { FETCH_ALL_ORDERS } from "../actions/orders";

export default function(state = [], { type, payload } = {}) {
  switch (type) {
    case FETCH_ALL_ORDERS:
      return payload;
    default:
      return state;
    }
  }
