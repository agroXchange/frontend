import { FETCH_ALL_CODES } from "../actions/codes";

export default function (state = [], { type, payload } = {}) {
    switch (type) {
        case FETCH_ALL_CODES:
            return payload;
        default:
            return state;
    }
}
