import { useEffect, useState } from 'react'

export default function Test () {
  const [count, setCount] = useState(0)

  return <>
    <h1>test page</h1>
    <div>
      {count}
    </div>
  </>
}
