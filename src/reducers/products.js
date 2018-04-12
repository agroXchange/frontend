import { FETCH_ALL_PRODUCTS, FETCH_PRODUCT } from "../actions/products";

export default function (state = [], {type, payload}) {
  switch (type) {
  case FETCH_ALL_PRODUCTS:
    return payload
  case FETCH_PRODUCT:
    return payload
  default:
    return state
  }
}
