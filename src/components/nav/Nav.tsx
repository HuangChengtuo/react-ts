import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

export default function Nav () {
  const [time, setTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [time])

  return (
    <div id="nav">
      <a href="http://www.huangchengtuo.com" className="logo">
        <img src="https://s1.huangchengtuo.com/img/pureDD.png" alt="logo" className="logo-img" />
      黄秤砣
    </a>
      <span className="time roboto-font" data-v-005de424="">{time}</span>
      <NavLink to="/" className="download-btn">工具箱</NavLink>
      <a href="http://blog.huangchengtuo.com" rel="noreferrer" className="download-btn">去博客</a>
    </div>
  )
}
