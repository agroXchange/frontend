import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const enhancer = compose(
	applyMiddleware(ReduxThunk),
	devTools
)

const store = createStore(reducer, enhancer)

export default store
