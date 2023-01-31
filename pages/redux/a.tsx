import { useTypeSelector, changeCount } from '@/store'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import Link from 'next/link'

export default function ReduxA () {
  const count = useTypeSelector(state => state.count)
  const dispatch = useDispatch()

  function fn () {
    dispatch(changeCount(count + 1))
  }

  return <>
    <Link href="/redux/b">go to B</Link><Button onClick={fn}>+</Button>{count}
  </>
}
