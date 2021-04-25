import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.min.css';
import './App.scss'

// 提前唤醒 serverless 服务
fetch('https://www.huangchengtuo.com').catch(err => {
  // 跨域，do nothing
})

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
