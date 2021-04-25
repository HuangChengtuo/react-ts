import './Index.scss';
import { ClockCircleOutlined } from '@ant-design/icons'
import {NavLink} from "react-router-dom";

export default function Index() {
  return (
    <div id="home-page">
      <h1>黄秤砣的工具箱</h1>
      <NavLink to="/unixTime" className="grid">
        <div> </div>
        <div className="card">
          <h2>unix时间戳计算机</h2>
          <ClockCircleOutlined style={{ fontSize: '192px' }} />
        </div>
      </NavLink>
    </div>
  );
}
