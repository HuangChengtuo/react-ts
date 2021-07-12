import { useDispatch } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useMySelector, changeCount } from '@/store'
import { Button } from 'antd'

export default function ReduxA () {
  // import type { State } from '@/store'
  // const count = useSelector<State, number>(state => state.count)
  const count = useMySelector(state => state.count)
  const dispatch = useDispatch()

  function add () {
    dispatch(changeCount(count + 1))
  }

  const router = useHistory()
  const match = useRouteMatch()
  console.log(router, match)

  return (
    <div className="redux-a page-1200">
      <h1>redux A</h1>
      <div>count:{count}</div>
      <Button onClick={add}>add</Button>
      <br />
      <Button onClick={() => { router.push('/redux/b?hct=123') }}>go to B</Button>
    </div>
  )
}
