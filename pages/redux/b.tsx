import { useTypeSelector, changeCount } from '@/store'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import Link from 'next/link'

export default function ReduxB () {
  const count = useTypeSelector(state => state.count)
  const dispatch = useDispatch()

  function fn () {
    dispatch(changeCount(count - 1))
  }

  return <>
    <Link href="/redux/a">go to A</Link><Button onClick={fn}>-</Button>{count}
  </>
}
