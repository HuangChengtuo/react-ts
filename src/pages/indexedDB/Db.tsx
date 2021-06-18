import { useEffect } from 'react'
import LocalIndexedDB from './indexedDB'

export default function Db () {
  const db = new LocalIndexedDB('hct', 1, 'table3')

  async function dbFn () {
    await db.open()
    await db.set('name', 'hct')
  }

  useEffect(() => {
    dbFn()
  }, [])

  async function click () {
    await db.open()
    db.set('try', 'again')
  }

  return <div id="indexedDB-page">
    <button onClick={click}>set</button>
  </div>
}
