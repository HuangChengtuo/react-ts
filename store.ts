import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, connect } from 'react-redux'

const initialState = {
  count: 0
}

export type StoreState = typeof initialState

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

/** 封装一层 hook，添加准确类型提示 */
export function useTypeSelector<T = any> (fn: (state: StoreState) => T) {
  return useSelector<StoreState, T>(fn)
}

/** 封装一层 hoc，给 mapStateToProps 里的 state 添加类型 */
export function typeConnect<T> (fn: (state: StoreState) => T) {
  return connect<T, any, any, StoreState>(fn)
}

export default configureStore({
  reducer: storeSlice.reducer,
  devTools: true
})
