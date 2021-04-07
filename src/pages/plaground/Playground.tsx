import './Playground.scss'
import { Input, Form, Button } from 'antd'
import { useState, useEffect } from 'react'

export default function Playground() {
  const obj: { name: string, age: string | number } = { name: 'hct', age: 24 }

  const [count, setCount] = useState<number>(16)
  useEffect(() => {
    console.log(count, form.getFieldsValue())
  })
  const changeCount = () => {
    setCount(count + 1)
  }

  const [form] = Form.useForm()
  const onFinish = (value: { name: string, age: string | number }) => {
    console.log(form.getFieldValue('age'))
  }
  return (
    <div id="playground">
      <Button onClick={() => {
        form.resetFields()
      }}>reset</Button>
      {count}
      <Button onClick={changeCount}>set</Button>
      <br /><br />
      <Form form={form} onFinish={onFinish} initialValues={obj}>
        <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="年龄" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Button htmlType="submit">submit</Button>
      </Form>
    </div>
  );
}
