import { combineReducers } from '@reduxjs/toolkit'
import users from './slices/users'
import settings from './slices/settings'
import countries from './slices/countries'

const rootReducer = combineReducers({
  users,
  settings,
  countries,
})

export default rootReducer
