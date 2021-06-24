import { createStore } from 'redux'
import rootReducer from './reducers'

const reduxDebug = import.meta.env.VITE_REDUX_DEBUG

const store = createStore(
  rootReducer,
  !!reduxDebug && (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
)

export default store
