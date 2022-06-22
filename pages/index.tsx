import {
  ClockCircleOutlined,
  CalculatorOutlined,
  YoutubeOutlined,
  CalendarOutlined,
  BgColorsOutlined,
  FileImageOutlined
} from '@ant-design/icons'
import NavLink from '@/components/Link'

interface Card {
  title: string,
  link: string,
  Icon: React.ForwardRefExoticComponent<any>
}

export default function Index () {
  const cards: Card[] = [
    {
      title: '新番时间表',
      link: 'https://www.huangchengtuo.com/bangumi',
      Icon: CalendarOutlined
    },
    {
      title: 'unix时间戳计算器',
      link: '/unixTime',
      Icon: ClockCircleOutlined
    },
    {
      title: '进制转换',
      link: '/hex',
      Icon: CalculatorOutlined
    },
    {
      title: '新番 JSON 生成',
      link: '/bangumi2json',
      Icon: YoutubeOutlined
    },
    {
      title: '获取 base64',
      link: '/img2base64',
      Icon: FileImageOutlined
    },
    {
      title: 'RGB 转换器',
      link: '/rgb',
      Icon: BgColorsOutlined
    }
  ]

  return (
    <div id="home-page">
      <h1>黄秤砣的工具箱</h1>
      <div className="grid">
        {cards.map(item =>
          <NavLink key={item.title} to={item.link} className="card">
            <h2>{item.title}</h2>
            <item.Icon style={{ fontSize: '192px' }} />
          </NavLink>
        )}
      </div>
    </div>
  );
}
