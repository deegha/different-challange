/**
 * Created at 10/04/2019
*/


import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components'
import * as serviceWorker from './serviceWorker'

import thunkMiddleware from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./reducers/rootReducer"

const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>, 
      document.getElementById('root'))

serviceWorker.unregister()
