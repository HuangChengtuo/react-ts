import { Switch, Route, NavLink } from 'react-router-dom'
import Index from "../pages/index/Index";
import Playground from '../pages/plaground/Playground'
import ReduxA from '../pages/redux/a'
import ReduxB from '../pages/redux/b'
import './Router.scss'

export default function Router(props: any) {
  return (
    <div>
      <div className={'router-header'}>
        <NavLink to={'/'}>index</NavLink>
        &nbsp; &nbsp;
        <NavLink to={'/playground'}>playground</NavLink>
        &nbsp; &nbsp;
        <NavLink to={'/redux/a'}>ReduxA</NavLink>
        &nbsp; &nbsp;
        <NavLink to={'/redux/b'}>ReduxB</NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/playground" component={Playground} />
        <Route path="/redux/a" component={ReduxA} />
        <Route path="/redux/b" component={ReduxB} />
      </Switch>
    </div>
  )
}