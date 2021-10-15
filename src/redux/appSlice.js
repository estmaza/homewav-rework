import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"

export const adapter = createEntityAdapter()
const initialState = adapter.getInitialState({
  loading: false,
  version: 0
})

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {}
})

export default slice.reducer