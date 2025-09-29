import React from 'react'
import { Provider } from 'react-redux'
import store from './Store'
import UI from './UI'

const Main = () => {
  return (
    <div>
    <Provider store={store}>
        <UI/>
    
    </Provider>
    </div>
  )
}

export default Main
