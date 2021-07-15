import { useEffect, useState } from 'react'
import LocalIndexedDB from './indexedDB'

export default function Db () {
  const [val, setVal] = useState('')
  const [val2, setVal2] = useState('')
  const db = new LocalIndexedDB('hct', 1, 'table3')

  useEffect(() => {
    getFn()
    getFn2()
  }, [])

  async function getFn () {
    await db.open()
    const data = await db.get('name')
    setVal(data)
  }

  async function getFn2 () {
    await db.open()
    const data = await db.get('key2')
    setVal2(data)
  }

  async function setFn () {
    const text = 'table3'
    await db.open()
    await db.set('name', text)
    setVal(text)
  }

  async function setFn2 () {
    await db.open()
    await db.set('key2', 'val2')
  }

  function click () {
    setFn()
    setFn2()
  }


  return <div id="indexedDB-page">
    <button onClick={click}>{val || 'empty'}</button>
    <h2>{val2}</h2>
  </div>
}
