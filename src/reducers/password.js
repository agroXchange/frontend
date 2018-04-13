import {FORGOT_PASSWORD_FAILED} from '../actions/password'
import {FORGOT_PASSWORD_SUCCESS} from '../actions/password'
import {RESET_PASSWORD_FAILED} from '../actions/password'
import {RESET_PASSWORD_SUCCESS} from '../actions/password'

export default function (state = {}, {type, payload}) {
	switch (type) {
		case FORGOT_PASSWORD_SUCCESS:
			return payload
		case FORGOT_PASSWORD_FAILED:
			return {
				error: payload
			}
		case RESET_PASSWORD_SUCCESS:
			return payload
		case RESET_PASSWORD_FAILED:
			return {
				error: payload
			}
		default:
      return state
	}
}
