import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    changeCount (state, { payload }: { payload: number }) {
      state.count = payload
    }
  }
})

export const { changeCount } = storeSlice.actions

export default configureStore({
  reducer: storeSlice.reducer,
  devTools: true
})
