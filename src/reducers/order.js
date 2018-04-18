import { FETCH_ORDER, CHANGE_STATUS } from "../actions/orders";
import {GET_MESSAGES} from "../actions/chat"

export default function(state = null, { type, payload } = {}) {
  switch (type) {
    case FETCH_ORDER:
      return payload;
    case GET_MESSAGES:
      const {messages, ...rest} = payload
      return rest
    case CHANGE_STATUS:
      return payload
    default:
      return state;
    }
  }
