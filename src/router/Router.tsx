import { Switch, Route, NavLink, useLocation } from 'react-router-dom'
import Index from "@/pages/index/Index";
import Playground from '@/pages/plaground/Playground'
import ReduxA from '@/pages/redux/a'
import ReduxB from '@/pages/redux/b'
import UnixTime from '@/pages/unixTime/UnixTime'
import './Router.scss'

import dayjs from 'dayjs'
import { useEffect, useState } from "react";

export default function Router() {
  const route = useLocation()
  const [time, setTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => {
      clearInterval(timer)

    }
  })
  const IndexHeader = (
    <div className={'router-header'}>
      <NavLink to={'/'}>index</NavLink>
      &nbsp; &nbsp;
      <NavLink to={'/playground'}>playground</NavLink>
      &nbsp; &nbsp;
      <NavLink to={'/redux/a'}>ReduxA</NavLink>
      &nbsp; &nbsp;
      <NavLink to={'/redux/b'}>ReduxB</NavLink>
      &nbsp; &nbsp;
      <NavLink to={'/unixTime'}>unixTime</NavLink>
    </div>
  )

  const DefaultNav = (
    <div id="nav">
      <a href="https://www.huangchengtuo.com" className="logo">
        <img src="https://s1.huangchengtuo.com/img/pureDD.png" alt="logo" className="logo-img" />
        黄秤砣
      </a>
      <span className="time roboto-font" data-v-005de424="">{time}</span>
      <a href="http://blog.huangchengtuo.com" target="_blank" rel="noreferrer" className="download-btn">去博客</a>
    </div>
  )

  return (
    <div>
      {route.pathname === '/' ? IndexHeader : DefaultNav}
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/playground" component={Playground} />
        <Route path="/redux/a" component={ReduxA} />
        <Route path="/redux/b" component={ReduxB} />
        <Route path="/unixTime" component={UnixTime} />
      </Switch>
    </div>
  )
}