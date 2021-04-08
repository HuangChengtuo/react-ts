import { Reducer, createStore } from 'redux'


export type State = {
  color: string,
  count: number
}

const state = {
  color: '#ffffff',
  count: 0
} as State

const reducer: Reducer = (state: State, { type, payload }) => {
  return { ...state, [type]: payload }
}

const store = createStore(reducer, state)

export default store