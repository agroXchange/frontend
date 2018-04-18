import {createStore, applyMiddleware, combineReducers} from 'redux'
import compose from 'lodash/fp/compose'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import {storeJwt, socketIo} from './middleware'
import SocketIO from './socketio'

const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

export const socket = new SocketIO()

const enhancer = compose(
	applyMiddleware(ReduxThunk, storeJwt, socketIo(socket)),
	devTools
)

const store = createStore(reducer, enhancer)

const initialCurrentUser = store.getState().currentUser
if (initialCurrentUser) {
  socket.connect(store.dispatch, initialCurrentUser.jwt)
}

export default store
