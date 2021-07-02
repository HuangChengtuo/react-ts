import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

interface IBangumi {
  begin: string,
  end: string
}
// TODO 之后改成直接生成 JSON 文件
export default function Bangumi () {
  const start = dayjs().unix() - 86400 * 365
  const [json, setJson] = useState('')

  async function getData () {
    const raw = await fetch('https://cdn.jsdelivr.net/npm/bangumi-data/dist/data.json')
    const res = await raw.json()
    let arr: IBangumi[] = res.items
    arr = arr.filter(item => !item.end)
    arr = arr.filter(item => dayjs(item.begin).unix() > start)
    setJson(JSON.stringify(arr))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="page-1200" style={{ wordBreak: 'break-all' }}>
      {json}
    </div>
  )
}
