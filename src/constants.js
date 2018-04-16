export const localStorageJwtKey = 'currentUserJwt'
export const localStorageId = 'currentUserId'

let backend

const hostname = window && window.location && window.location.hostname

if (hostname.startsWith('localhost')) {
  backend = 'http://localhost:4008'
} else {
  backend = 'PLACEHOLDER_FOR_DEPLOYED_URL'
}

export const baseUrl = backend