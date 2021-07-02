import { Switch, Route } from 'react-router-dom'
import Nav from '@/components/nav/Nav'
import Index from "@/pages/index/Index";
import Playground from '@/pages/plaground/Playground'
import ReduxA from '@/pages/redux/a'
import ReduxB from '@/pages/redux/b'
import UnixTime from '@/pages/unixTime/UnixTime'
import Hex from '@/pages/hex/Hex'
import ReactDom from '@/pages/reactDom/ReactDom'
import Db from '@/pages/db/Db'

export default function Router () {
  return <>
    <Nav />
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
}
