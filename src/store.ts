import { createStore } from 'redux'
import { useSelector } from 'react-redux'

const state = {
  color: 'red',
  count: 1
}

export type State = typeof state

const reducer = (state: State, { type, payload }) => {
  return { ...state, [type]: payload }
}

const store = createStore(
  reducer,
  state,
  (window as any)?.__REDUX_DEVTOOLS_EXTENSION__?.()
)

export default store

export function useMySelector<T = any> (fn: (state: State) => T) {
  return useSelector<State, T>(fn)
}
