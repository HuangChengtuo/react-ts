import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import type { State } from '@/store'
import { Button } from 'antd'

export default function ReduxA () {
  const count = useSelector<State, number>(state => state.count)
  const dispatch = useDispatch()
  const minus = () => {
    dispatch({ type: 'count', payload: count - 1 })
  }


  return (
    <div className="redux-b page-1200">
      <h1>redux B</h1>
      <div>count:{count}</div>
      <Button onClick={minus}>minus</Button>
      <br />
      <NavLink to="/redux/a">go to A</NavLink>
    </div>
  )
}
