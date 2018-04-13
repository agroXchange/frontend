import { FETCH_PRODUCT } from '../actions/products'



export default function (state = null, action) {
  switch(action.type) {
    case FETCH_PRODUCT:
      return action.payload
    default:
      return state
    }
}
