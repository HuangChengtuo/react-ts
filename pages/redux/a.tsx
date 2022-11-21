import { useTypeSelector, changeCount } from '@/store'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import Link from '../../components/Link'

export default function ReduxA () {
  const count = useTypeSelector(state => state.count)
  const dispatch = useDispatch()

  function fn () {
    dispatch(changeCount(count + 1))
  }

  return <>
    <Link to="/redux/b">go to B</Link><Button onClick={fn}>+</Button>{count}
  </>
}
