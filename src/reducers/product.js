import { FETCH_PRODUCT, UPDATED_PRODUCT, REMOVED_PRODUCT, ADD_PRODUCT } from '../actions/products'



export default function (state = null, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      return { ...action.payload }
    case FETCH_PRODUCT:
      return action.payload
    case UPDATED_PRODUCT:
      return action.payload
    case REMOVED_PRODUCT:
      return action.payload
    default:
      return state
    }
}
