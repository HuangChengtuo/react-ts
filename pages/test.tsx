import { useEffect, useState } from 'react'
import { Button } from 'antd'

let oldCount = 0

export default function Test () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    oldCount = count
    console.log('effect', oldCount)
  })
  console.log('normal', oldCount)

  return <>
    <h1>test page</h1>
    <div>
      {count}
      <Button onClick={() => { setCount(count + 1) }}>asdasd</Button>
      {oldCount}
    </div>
  </>
}
