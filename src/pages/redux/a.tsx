import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useMySelector } from '@/store'
import { Button } from 'antd'
import { useEffect } from 'react'

export default function ReduxA () {
  // const count = useSelector<State, number>(state => state.count)
  const count = useMySelector(state => state.count)
  const dispatch = useDispatch()

  function add () {
    dispatch({ type: 'count', payload: count + 1 })
  }

  useEffect(() => {
    console.log(count)
  }, [])

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
