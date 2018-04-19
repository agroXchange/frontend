export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

export const setLanguage = (language) =>  {
    return {
        type: CHANGE_LANGUAGE,
        payload: language
    }
}