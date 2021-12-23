import { useMySelector, changeCount } from '../../store'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import Link from '../../components/Link'

export default function ReduxB () {
  const count = useMySelector(state => state.count)
  const dispatch = useDispatch()

  function fn () {
    dispatch(changeCount(count - 1))
  }

  return <>
    <Link to="/redux/a">go to A</Link><Button onClick={fn}>-</Button>{count}
  </>
}
