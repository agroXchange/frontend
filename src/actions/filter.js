export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'

export const filterProducts = (parameter) => {
    return {
        type: FILTER_PRODUCTS,
        payload: parameter
    }
}