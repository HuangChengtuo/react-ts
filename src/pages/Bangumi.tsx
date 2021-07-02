import { useState, useEffect } from 'react'
import { Button } from 'antd'
import dayjs from 'dayjs'

interface IBangumi {
  begin: string,
  end: string
}

export default function Bangumi () {
  /** 一年前 */
  const start = dayjs().unix() - 86400 * 365
  const [json, setJson] = useState('{}')
  const [url, setUrl] = useState('')

  async function getData () {
    const raw = await fetch('https://cdn.jsdelivr.net/npm/bangumi-data/dist/data.json')
    const res = await raw.json()
    let arr: IBangumi[] = res.items
    // 过滤已完结和一年前开播还未完结的番剧
    arr = arr.filter(item => !item.end)
    arr = arr.filter(item => dayjs(item.begin).unix() > start)

    const blob = new Blob([json], { type: 'application/json;charset=utf-8' })
    setJson(JSON.stringify(arr))
    setUrl(URL.createObjectURL(blob))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="page-1200" style={{ wordBreak: 'break-all' }}>
      <Button type="primary">
        <a href={url} download="bangumi">下载 JSON 文件</a>
      </Button>
      <br />
      {json}
    </div>
  )
}
