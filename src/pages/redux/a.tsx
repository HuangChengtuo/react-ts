import { useSelector, useDispatch } from 'react-redux'
import type { State } from '../../store'
import { Button } from 'antd'

export default function ReduxA() {
  const count = useSelector<State, number>(state => state.count)
  const dispatch = useDispatch()
  const add = () => {
    dispatch({ type: 'count', payload: count + 1 })
  }
  return (
    <div className="redux-a">
      <h1>redux a</h1>
      count:{count}
      <Button onClick={add}>add</Button>
    </div>
  )
}