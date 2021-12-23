import { Select } from 'antd'

const Option = Select.Option

export default function Test (props: { time: string }) {
  return <>
    <Select style={{ width: '200px' }}>
      <Option value={1} title="QWE">qwe</Option>
      <Option value={2} title="ASD">asd</Option>
      <Option value={3} title="ZXC">zxc</Option>
    </Select>
  </>
}
