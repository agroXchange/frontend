import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import {storeJwt} from './middleware'

const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const enhancer = compose(
	applyMiddleware(ReduxThunk, storeJwt),
	devTools
)

const store = createStore(reducer, enhancer)

export default store
