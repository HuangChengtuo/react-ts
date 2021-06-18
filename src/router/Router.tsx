import { useEffect, useState } from "react";
import { Switch, Route, NavLink } from 'react-router-dom'

import Index from "@/pages/index/Index";
import Playground from '@/pages/plaground/Playground'
import ReduxA from '@/pages/redux/a'
import ReduxB from '@/pages/redux/b'
import UnixTime from '@/pages/unixTime/UnixTime'
import Hex from '@/pages/hex/Hex'
import ReactDom from '@/pages/reactDom/ReactDom'
import Db from '@/pages/indexedDB/Db'

import './Router.scss'
import dayjs from 'dayjs'

export default function Router () {
  const [time, setTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <>
      <div id="nav">
        <a href="http://www.huangchengtuo.com" className="logo">
          <img src="https://s1.huangchengtuo.com/img/pureDD.png" alt="logo" className="logo-img" />
          黄秤砣
        </a>
        <span className="time roboto-font" data-v-005de424="">{time}</span>
        <NavLink to="/" className="download-btn">工具箱</NavLink>
        <a href="http://blog.huangchengtuo.com" target="_blank" rel="noreferrer" className="download-btn">去博客</a>
      </div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/playground" component={Playground} />
        <Route path="/redux/a" component={ReduxA} />
        <Route path="/redux/b" component={ReduxB} />
        <Route path="/unixTime" component={UnixTime} />
        <Route path="/hex" component={Hex} />
        <Route path="/reactDom" component={ReactDom} />
        <Route path="/db" component={Db} />
      </Switch>
    </>
  )
}
