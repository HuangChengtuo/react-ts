import { useHistory } from 'react-router-dom'
import { useMySelector, asyncFn ,useMyDispatch} from '@/store'
import { Button } from 'antd'

export default function ReduxA () {
  // import type { State } from '@/store'
  // const count = useSelector<State, number>(state => state.count)
  const count = useMySelector(state => state.count)
  const dispatch = useMyDispatch()

  function add () {
    dispatch(asyncFn(count + 1)).then(res => { console.log(res) })
  }

  const router = useHistory()

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
