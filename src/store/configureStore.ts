import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { Platform } from 'react-native'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AsyncStorage from '@react-native-async-storage/async-storage'
import thunk from 'redux-thunk'
 
import rootReducer from './index'

const persistConfig = {
  key: 'authPersist',
  storage: AsyncStorage,
  whitelist: ['authReducer']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, compose(applyMiddleware(thunk))) 
export const persistor = persistStore(store)