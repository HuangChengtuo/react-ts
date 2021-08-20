import { useEffect, useState } from 'react'
import { Button } from 'antd'

class ListNode {
  val: number
  next: ListNode
  prev: ListNode
  constructor (val: number, next: ListNode = null) {
    this.val = val
    this.next = next
    if (next) {
      next.prev = this
    }
  }
}

const temp = new ListNode(1)
temp.next = new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, temp))))
temp.next.prev = temp

export default function Swiper () {
  const [head, setHead] = useState(temp)

  useEffect(() => {
    console.log(head)
  })

  function getClass (node: number) {
    let position = ''
    if (node === head.prev.val) {
      position = 'l'
    }
    if (node === head.val) {
      position = 'c'
    }
    if (node === head.next.val) {
      position = 'r'
    }
    return 'card ' + position
  }

  return <div id="swiper-page">
    <div className="container">
      <div className={getClass(1)}>{head.prev.val}</div>
      <div className={getClass(2)}>{head.val}</div>
      <div className={getClass(3)}>{head.next.val}</div>
    </div>
    <Button onClick={() => { setHead(head.prev) }}>prev</Button>
    <Button onClick={() => { setHead(head.next) }}>next</Button>
  </div>
}
