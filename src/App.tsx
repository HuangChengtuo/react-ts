import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Router from './router/Router';
import { BrowserRouter, withRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

const HOCRouter = withRouter(Router)

ReactDOM.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <HOCRouter />
      </Provider>
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
