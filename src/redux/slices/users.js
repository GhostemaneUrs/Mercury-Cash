import { URL_GATEWAY } from '../../helpers/constants'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  loading: false,
}

export const countriesSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setUsers, setLoading } = countriesSlice.actions

export const getUsers = createAsyncThunk(
  'countries/getUsers',
  async (data, thunkAPI) => {
    await fetch(`${URL_GATEWAY}/usuarios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        response.json().then(data => {
          thunkAPI.dispatch(setUsers(data))
          thunkAPI.dispatch(setLoading(false))
        })
      })
      .catch(error => {
        if (error) {
          console.log(error)
        }
      })
  }
)

export const createUsers = createAsyncThunk(
  'users/createUsers',
  async (data, thunkAPI) => {
    await fetch(`${URL_GATEWAY}/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        response.json().then(data => {
          thunkAPI.dispatch(getUsers())
          thunkAPI.dispatch(setLoading(false))
        })
      })
      .catch(error => {
        if (error) {
          console.log(error)
        }
      })
  }
)

export default countriesSlice.reducer
