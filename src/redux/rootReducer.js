import { combineReducers } from '@reduxjs/toolkit'
import users from './slices/users'
import countries from './slices/countries'

const rootReducer = combineReducers({
  users,
  countries,
})

export default rootReducer
