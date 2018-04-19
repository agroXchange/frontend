import { CHANGE_LANGUAGE } from "../actions/language";

export default function (state = "en", { type, payload } = {}) {
    switch (type) {
        case CHANGE_LANGUAGE:
            return payload;
        default:
            return state;
    }
}