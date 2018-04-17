export const localStorageJwtKey = 'currentUserJwt'

let backend

const hostname = window && window.location && window.location.hostname

if (hostname.startsWith('localhost')) {
  backend = 'http://localhost:4008'
} else {
  backend = 'http://188.166.119.233:4008'
}

export const baseUrl = backend
