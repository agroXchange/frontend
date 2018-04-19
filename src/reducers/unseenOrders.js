import {FETCH_UNSEEN_ORDERS} from "../actions/orders"

export default (state = [], {type, payload}) => {
  switch(type) {
    case FETCH_UNSEEN_ORDERS:
      return payload
    default:
      return state
  }
}