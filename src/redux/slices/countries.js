import { URL_GATEWAY } from '../../helpers/constants'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  countries: [],
  loading: false,
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setCountries, setLoading } = countriesSlice.actions

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async (data, thunkAPI) => {
    await fetch(`${URL_GATEWAY}/paises`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        response.json().then(data => {
          thunkAPI.dispatch(setCountries(data))
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
