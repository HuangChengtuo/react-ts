import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import Link from './Link'

export default function Nav () {
  const [time, setTime] = useState('')
  useEffect(() => {
    setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    const timer = setInterval(() => {
      setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div id="nav">
      <a href="https://www.huangchengtuo.com" className="logo">
        <img src="https://s1.huangchengtuo.com/img/pureDD.png" alt="logo" className="logo-img" /> 黄秤砣
      </a>
      <span className="time roboto-font" data-v-005de424="">{time}</span>
      <Link to="/" className="download-btn">工具箱</Link>
      <a href="https://blog.huangchengtuo.com" rel="noreferrer" className="download-btn">去博客</a>
    </div>
  )
}
