import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import ThunkMiddleware, { ThunkDispatch } from 'redux-thunk'

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

export function asyncFn (count: number) {
  return function (dispatch) {
    return fetch('https://s1.huangchengtuo.com/json/bangumi.json').then(() => {
      dispatch(changeCount(count))
      return count
    })
  }
}

const store = configureStore({
  reducer: slice.reducer,
  middleware: [ThunkMiddleware]
})

export default store

type State = typeof state

export function useMySelector<T = any> (fn: (state: State) => T) {
  return useSelector<State, T>(fn)
}

export function useMyDispatch () {
  return useDispatch<ThunkDispatch<State, void, Action>>()
}
