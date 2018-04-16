import * as request from "superagent";

const baseUrl = "http://localhost:4008";

export const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
//will need FETCH_USERS_PRODUCT what returns all Products of one user

export const fetchAllProducts = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/products`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ALL_PRODUCTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchProduct = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/products/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_PRODUCT,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const addProduct = (product, picture) => (dispatch, getState) =>{
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/products`)
    .set("Authorization", `Bearer ${jwt}`)
    .attach("productPhoto", picture)
    .field(product)
    .then(response => {
      dispatch({
        type: ADD_PRODUCT,
        payload: response.body
      })
    })
    .catch(err => {
      console.error(err)
    })
}


export const searchProduct = (name,number,country) => (dispatch) => {
    console.log(name, number, country)

    request
        .get(`${baseUrl}/products`)
        .then(result => {
            dispatch({
                type: SEARCH_PRODUCT
            })
        })
        .catch(err => {
            console.error(err)
        })
      }