import {GET_MESSAGES} from "../actions/chat"

const NEW_MESSAGE = 'NEW_MESSAGE'

export default (state =[], {type, payload}) => {
  switch(type) {
    case GET_MESSAGES:
      return payload.messages
    case NEW_MESSAGE:
      return [...state, payload]
    default:
      return state
  }
}