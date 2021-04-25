import { Switch, Route, NavLink, useLocation } from 'react-router-dom'
import Index from "@/pages/index/Index";
import Playground from '@/pages/plaground/Playground'
import ReduxA from '@/pages/redux/a'
import ReduxB from '@/pages/redux/b'
import UnixTime from '@/pages/unixTime/UnixTime'
import './Router.scss'

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

const Nav = (
  <div id="nav">
    
  </div>
)

export default function Router() {
  const route = useLocation()

  return (
    <div>
      {route.pathname === '/' ? IndexHeader : Nav}
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