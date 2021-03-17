import { createStore, applyMiddleware, compose, combineReducers, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import notesReducer from '../store/reducers/notes'
import authReducer from '../store/reducers/auth'

const rootReducer = combineReducers({
    notesReducer,
    authReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export default rootReducer