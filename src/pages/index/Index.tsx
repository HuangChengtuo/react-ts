import './Index.scss';
import { ClockCircleOutlined, CalculatorOutlined } from '@ant-design/icons'
import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <div id="home-page">
      <h1>黄秤砣的工具箱</h1>
      <div className="grid">
        <div />
        <NavLink to="/unixTime" className="card">
          <h2>unix时间戳计算器</h2>
          <ClockCircleOutlined style={{ fontSize: '192px' }} />
        </NavLink>
        <NavLink to="/hex" className="card">
          <h2>进制转换</h2>
          <CalculatorOutlined style={{ fontSize: '192px' }} />
        </NavLink>
      </div>
    </div>
  );
}
