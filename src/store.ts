import { createStore } from 'redux'

export interface State {
  color: string,
  count: number
}

const state: State = {
  color: 'red',
  count: 1
}

const reducer = (state: State, { type, payload }) => {
  return { ...state, [type]: payload }
}

const store = createStore(
  reducer,
  state,
  (window as any)?.__REDUX_DEVTOOLS_EXTENSION__?.()
)

export default store
