import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { BrowserRouter, withRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

const HOCRouter = withRouter(Router)

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <HOCRouter />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);
