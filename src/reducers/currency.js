import { FETCH_CURRENCY } from "../actions/currencys";

export default function (state = [], { type, payload } = {}) {
    switch (type) {
        case FETCH_CURRENCY:
            return payload;
        default:
            return state;
    }
}
