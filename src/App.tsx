import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Router from './router';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './global.scss'

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
