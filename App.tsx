import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './src/store/index'
import { HomeComponent } from './src/screens/Home/Home'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store/configureStore'
//const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default function App() {

  return (
    <Provider store={store} >
      {/*<StatusBar style="auto" />*/}
      <PersistGate loading={null} persistor={persistor}>
        <HomeComponent />
      </PersistGate>
    </Provider>
  )
}