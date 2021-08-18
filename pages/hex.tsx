import { Radio, Input } from 'antd'
import { useState } from "react"

export default function Hex () {
  const [type, setType] = useState(10)
  const [value, setValue] = useState('12345')

  return (
    <div id="hex-page">
      <h2>进制转换器</h2>
      <Radio.Group value={type} onChange={e => { setType(e.target.value) }}>
        <Radio value={2}>二进制</Radio>
        <Radio value={8}>八进制</Radio>
        <Radio value={10}>十进制</Radio>
        <Radio value={16}>十六进制</Radio>
      </Radio.Group>
      <Input value={value} onChange={e => { setValue(e.target.value) }} />
      <div className="label">二进制：{parseInt(value, type).toString(2)}</div>
      <div className="label">八进制：{parseInt(value, type).toString(8)}</div>
      <div className="label">十进制：{parseInt(value, type).toString(10)}</div>
      <div className="label">十六进制：{parseInt(value, type).toString(16)}</div>
    </div>
  )
}
