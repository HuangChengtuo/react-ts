import React, { useEffect, useState } from 'react'
import './Playground.scss'

import { Button, Select, DatePicker } from 'antd'

const Option = Select.Option

export default function Playground (): React.ReactElement {
  const [text] = useState('asd')
  useEffect(() => {
    console.log(text)
  }, [])
  const btnFn = (e: React.MouseEvent) => {
    console.log(e)
  }

  const selectFn = (e: string, arr) => {
    console.log(arr)
  }

  const dateFn = (e) => {
    console.log(e)
  }

  return (
    <div id="playground">
      <DatePicker onChange={dateFn} />
      <Button onClick={btnFn}>asd</Button>
      <Select defaultValue="lucy" onChange={selectFn}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </Select>
    </div>
  );
}
