import {GET_UNREAD_MESSAGES} from "../actions/chat"

export default (state = [], {type, payload}) => {
  switch(type) {
    case GET_UNREAD_MESSAGES:
      return payload
    default:
      return state
  }
}