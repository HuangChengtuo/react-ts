import { useState } from 'react'
import { Button } from 'antd'

export default function Test () {
  const [arr, setArr] = useState([1, 2, 3, 4])

  function next () {
    const temp = arr
    // temp.push(temp.shift())
    arr.push(arr.shift())
    setArr([...arr])
  }

  return <>
    <h1>test page</h1>
    <div>
      <Button onClick={next}>next</Button>
      {arr}
    </div>
  </>
}
