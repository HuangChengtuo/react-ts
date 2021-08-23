import { useEffect, useState } from 'react'
import { Button } from 'antd'

class ListNode {
  index: number
  next: ListNode
  prev: ListNode
  constructor (index: number, next: ListNode = null) {
    this.index = index
    this.next = next
    if (next) {
      next.prev = this
    }
  }
}

const temp = new ListNode(1)
temp.next = new ListNode(2, new ListNode(3, temp))
temp.next.prev = temp

export default function Swiper () {
  const [head, setHead] = useState(temp)

  useEffect(() => {
    console.log(head)
  })

  function getClass (node: number) {
    let position = ''
    if (node === head.prev.index) {
      position = 'l'
    }
    if (node === head.index) {
      position = 'c'
    }
    if (node === head.next.index) {
      position = 'r'
    }
    return 'card ' + position
  }

  return <div id="swiper-page">
    <div className="container">
      <div className={getClass(1)} style={{background:'red'}}>1</div>
      <div className={getClass(2)} style={{background:'green'}}>2</div>
      <div className={getClass(3)} style={{background:'blue'}}>3</div>
      {/*<div className={getClass(4)} style={{background:'yellow'}}>4</div>*/}
      {/*<div className={getClass(5)} style={{background:'gray'}}>5</div>*/}
    </div>
    <Button onClick={() => { setHead(head.prev) }}>prev</Button>
    <Button onClick={() => { setHead(head.next) }}>next</Button>
  </div>
}
