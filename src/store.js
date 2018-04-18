import {createStore, applyMiddleware, combineReducers} from 'redux'
import compose from 'lodash/fp/compose'
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
