import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const state = {
  color: 'red',
  count: 1
}

const slice = createSlice({
  name: 'default',
  initialState: state,
  reducers: {
    changeCount (state, action: { payload: number }) {
      state.count = action.payload
    }
  }
})

export const { changeCount } = slice.actions

export default configureStore({ reducer: slice.reducer })

type State = typeof state

export function useMySelector<T = any> (fn: (state: State) => T) {
  return useSelector<State, T>(fn)
}
