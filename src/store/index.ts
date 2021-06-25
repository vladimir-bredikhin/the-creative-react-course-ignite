import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const reduxDebug = import.meta.env.VITE_REDUX_DEBUG

const composeEnhancer =
  (!!reduxDebug && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store
