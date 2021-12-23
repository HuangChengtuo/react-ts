import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const initialState = {
  count: 0
}

type State = typeof initialState

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

export function useMySelector<T> (fn: (state: State) => T) {
  return useSelector<State, T>(fn)
}

export default configureStore({
  reducer: storeSlice.reducer,
  devTools: true
})
