import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Table from "./views/table/Table";
import App from "./views/index/App";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/table" component={Table} />
      </Switch>
    </BrowserRouter>
  )
}