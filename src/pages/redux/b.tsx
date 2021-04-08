import { useSelector, useDispatch } from 'react-redux'
import type { State } from '../../store'
import { Button } from 'antd'

export default function ReduxA() {
  const count = useSelector<State, number>(state => state.count)
  const dispatch = useDispatch()
  const minus = () => {
    dispatch({ type: 'count', payload: count - 1 })
  }
  return (
    <div className="redux-b">
      <h1>redux b</h1>
      count:{count}
      <Button onClick={minus}>minus</Button>
    </div>
  )
}