import { createStore, applyMiddleware,  } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './RootReducer'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
