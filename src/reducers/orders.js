import {
  FETCH_ALL_ORDERS, FETCH_ORDERS_BY_SELLER, FETCH_ORDERS_BY_BUYER, CREATE_ORDER,
  FETCH_UNSEEN_ORDERS
} from "../actions/orders";

export default function(state = [], { type, payload } = {}) {
  switch (type) {
    case FETCH_ALL_ORDERS:
      return payload;
    case FETCH_ORDERS_BY_BUYER:
      return payload;
    case FETCH_ORDERS_BY_SELLER:
      return payload;
    case FETCH_UNSEEN_ORDERS:
      return payload
    case CREATE_ORDER:
      return [ ...state, payload ]
    default:
      return state;
    }
  }
