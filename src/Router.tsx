import { Switch, Route, NavLink } from 'react-router-dom'
import Index from "./pages/index/Index";
import Playground from './pages/plaground/Playground'
import './Router.scss'

export default function Router(props: any) {
  return (
    <div>
      <div className={'router-header'}>
        <NavLink to={'/'}>index</NavLink>
        &nbsp;
        <NavLink to={'/playground'}>playground</NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/playground" component={Playground} />
      </Switch>
    </div>
  )
}