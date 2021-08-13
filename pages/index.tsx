import { ClockCircleOutlined, CalculatorOutlined, YoutubeOutlined, CalendarOutlined } from '@ant-design/icons'
import NavLink from '@/components/Link'

export default function Index () {
  return (
    <div id="home-page">
      <h1>黄秤砣的工具箱</h1>
      <div className="grid">
        <a href="http://www.huangchengtuo.com/bangumi" className="card">
          <h2>新番时间表</h2>
          <CalendarOutlined style={{ fontSize: '192px' }} />
        </a>
        <NavLink to="/unixTime" className="card">
          <h2>unix时间戳计算器</h2>
          <ClockCircleOutlined style={{ fontSize: '192px' }} />
        </NavLink>
        <NavLink to="/hex" className="card">
          <h2>进制转换</h2>
          <CalculatorOutlined style={{ fontSize: '192px' }} />
        </NavLink>
        <NavLink to="/bangumi2json" className="card">
          <h2>新番 JSON 生成</h2>
          <YoutubeOutlined style={{ fontSize: '192px' }} />
        </NavLink>
      </div>
    </div>
  );
}
