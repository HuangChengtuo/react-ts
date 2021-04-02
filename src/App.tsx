import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { BrowserRouter, withRouter } from 'react-router-dom'

const HOCRouter = withRouter(Router)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HOCRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
