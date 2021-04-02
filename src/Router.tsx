import { Switch, Route, NavLink } from 'react-router-dom'
import Table from "./views/table/Table";
import Index from "./views/index/Index";
import './Router.scss'

export default function Router(props: any) {
  const fn = () => {
    console.log(props)
    props.history.push('/table')
  }
  return (
    <div>
      <div className={'router-header'}>
        <NavLink to={'/'}>index</NavLink>
        <NavLink to={'/table'}>table</NavLink>
        <button onClick={fn}>js go
        </button>
      </div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/table" component={Table} />
      </Switch>
    </div>
  )
}