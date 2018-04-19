import { FETCH_DASHBOARD } from "../actions/dashboard";

export default function (state = [], { type, payload } = {}) {
    switch (type) {
        case FETCH_DASHBOARD:
            return payload;
        default:
            return state;
    }
}
