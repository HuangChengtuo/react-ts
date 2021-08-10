import { Switch, Route } from 'react-router-dom'
import Nav from '@/components/nav/Nav'
import Index from "@/pages/index/Index";
import Playground from '@/pages/plaground/Playground'
import ReduxA from '@/pages/redux/A'
import ReduxB from '@/pages/redux/B'
import UnixTime from '@/pages/unixTime/UnixTime'
import Hex from '@/pages/hex/Hex'
import Bangumi from '@/pages/Bangumi'

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
      <Route path="/bangumi" component={Bangumi} />
      <Route path="/router">
        <div style={{ height: '600px', border: '1px solid black' }}>summary</div>
        <Switch>
          <Route path="/router/a" component={ReduxA} />
          <Route path="/router/b" component={ReduxB} />
        </Switch>
      </Route>
    </Switch>
  </>
}
