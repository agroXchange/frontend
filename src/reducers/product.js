import { FETCH_PRODUCT } from '../actions/products'


const initialState = {
  name: 'Mandarins',
  code: 40500,
  photo: "https://makemyvape.co.uk/image/cache/catalog/product/o/r/orange_mandarin_-_tfa-800x800.jpg",
  description: "Tasty fresh Mandarins from Columbia",
  volume: 1000,
  price: 3,
  currency: "USD",
  destination: "Worldwide",
  harvested: "2018-04-04",
  expiration: "2018-06-06",
  certification: "BPA"
}

export default function (state = null, action) {
  switch(action.type) {
    case FETCH_PRODUCT:
      return action.payload
    default:
      return state
    }
}
