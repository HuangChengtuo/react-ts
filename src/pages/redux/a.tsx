import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import type { State } from '@/store'
import { Button } from 'antd'

export default function ReduxA () {
  const count = useSelector<State, number>(state => state.count)
  const dispatch = useDispatch()
  const add = () => {
    dispatch({ type: 'count', payload: count + 1 })
  }

  const router = useHistory()

  return (
    <div className="redux-a page-1200">
      <h1>redux A</h1>
      <div>count:{count}</div>
      <Button onClick={add}>add</Button>
      <br />
      <Button onClick={() => {router.push('/redux/b?hct=123')}}>go to B</Button>
    </div>
  )
}
