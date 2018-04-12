import { FETCH_ALL_ORDERS, FETCH_ORDERS_BY_BUYERID } from "../actions/orders";

export default function(state = [], { type, payload } = {}) {
  switch (type) {
    case FETCH_ALL_ORDERS:
      return payload;
    case FETCH_ORDERS_BY_BUYERID:
      return payload;  
    default:
      return state;
    }
  }
