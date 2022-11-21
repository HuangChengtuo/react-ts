import { useState, ChangeEvent, useEffect } from 'react'
import dayjs from 'dayjs'
import { Input, Button, Radio } from 'antd';

export default function UnixTime () {
  const [nowUnix, setNowUnix] = useState(0)

  useEffect(() => {
    setNowUnix(dayjs().unix())
    window.dayjs = dayjs
    const timer = setInterval(() => {
      setNowUnix(dayjs().unix())
    }, 1000)
    return () => {
      clearInterval(timer)
      window.dayjs = null
    }
  }, [])

  const [unix, setUnix] = useState(0)
  const [text, setText] = useState('')
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)

  useEffect(() => {
    const now = dayjs()
    setText(now.format('YYYY-MM-DD HH:mm:ss'))
    const unix = now.unix()
    setUnix(unix)
    setStart(unix)
    setEnd(unix + 86400)
  }, [])

  function changeUnix (e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case 'unix':
        setUnix(+e.target.value)
        break
      case 'text':
        setText(e.target.value)
        break
      case 'start':
        setStart(+e.target.value)
        break
      case 'end':
        setEnd(+e.target.value)
    }
  }

  const [duration, setDuration] = useState('-')
  const [unit, setUnit] = useState('h')

  function calcDuration () {
    const unix = end - start
    let hours = Math.floor(unix / 3600)
    const minutes = Math.floor(unix / 60) % 60
    const seconds = unix % 60
    if (unit === 'h') {
      setDuration(`${hours}小时${minutes}分钟${seconds}秒`)
    }
    if (unit === 'd') {
      const days = Math.floor(unix / 86400)
      hours = Math.floor(unix / 3600) % 24
      setDuration(`${days}天${hours}小时${minutes}分钟${seconds}秒`)

    }
  }

  return (
    <div id="unix-time-page">
      <h2>现在时间戳：{nowUnix}</h2>
      <div>
        时间戳：<Input value={unix} onChange={changeUnix} type="number" name="unix" />
        &nbsp; &nbsp;{'=>'}&nbsp; &nbsp;
        {dayjs(unix * 1000).format('YYYY-MM-DD HH:mm:ss')}
      </div>
      <div>
        字符串：<Input value={text} onChange={changeUnix} name="text" />
        &nbsp; &nbsp;{'=>'}&nbsp; &nbsp;
        {dayjs(text).unix()}
      </div>
      <h2 style={{ margin: '16px 0 8px' }}>计算持续时间</h2>
      <div>
        起始时间戳：<Input value={start} type="number" name="start" onChange={changeUnix} />
        &nbsp; &nbsp;{'=>'}&nbsp; &nbsp;
        {dayjs(start * 1000).format('YYYY-MM-DD HH:mm:ss')}
      </div>
      <div>
        结束时间戳：<Input value={end} type="number" name="end" onChange={changeUnix} />
        &nbsp; &nbsp;{'=>'}&nbsp; &nbsp;
        {dayjs(end * 1000).format('YYYY-MM-DD HH:mm:ss')}
      </div>
      <Button type="primary" onClick={calcDuration}>计算</Button>
      &nbsp; &nbsp;
      <Radio.Group value={unit} onChange={(e) => { setUnit(e.target.value) }}>
        <Radio value="d">天</Radio>
        <Radio value="h">小时</Radio>
      </Radio.Group>
      <div>{duration}</div>
    </div>
  )
}
