import { useState, useEffect } from 'react'
import { Button } from 'antd'
import dayjs from 'dayjs'
import api from '@/api'

export default function Bangumi2json () {
  const [json, setJson] = useState('[]')
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  async function getData () {
    /** 一年前 */
    const start = dayjs().unix() - 86400 * 365
    const res = await api.getBangumi()
    let arr = res.items
    // 过滤已完结和一年前开播还未完结的番剧
    arr = arr.filter(item => !item.end)
    arr = arr.filter(item => dayjs(item.begin).unix() > start)

    const s = JSON.stringify(arr)
    setJson(s)
    const blob = new Blob([s], { type: 'application/json;charset=utf-8' })
    setUrl(URL.createObjectURL(blob))
    setLoading(false)
  }

  return (
    <div className="page-1200" style={{ wordBreak: 'break-all' }}>
      <div style={{ marginBottom: '4px' }}>
        <Button type="primary" loading={loading}>
          <a style={{ color: 'white' }} href={url} download="bangumi">下载 JSON 文件</a>
        </Button>
        &nbsp; &nbsp;已过滤完结和一年前开播还未完结的番剧&nbsp; &nbsp;原数据来自
        <a href="https://github.com/bangumi-data/bangumi-data" target="_blank" rel="noreferrer">番组计划</a>
      </div>
      {json}
    </div>
  )
}
