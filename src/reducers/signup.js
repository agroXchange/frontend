import {
	USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED, CLOSE_WINDOW
} from '../actions/users'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case USER_SIGNUP_SUCCESS:
      return {
        success: true
      }

    case USER_SIGNUP_FAILED:
      return {
        error: payload
      }
			case CLOSE_WINDOW:
	        return {
	          success: false
	        };

		default:
      return state
	}
}
