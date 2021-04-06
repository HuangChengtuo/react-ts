import './Playground.scss'
import { Input, Form, Button } from 'antd'

export default function Playground() {
  const obj: { name: string, age: string | number } = { name: 'hct', age: 24 }
  const [form] = Form.useForm()
  const onFinish = (value: { name: string, age: string | number }) => {
    console.log(value)
  }
  return (
    <div id="playground">
      <Button onClick={() => {
        form.resetFields()
      }}>reset</Button>
      <Form form={form} onFinish={onFinish} initialValues={obj}>
        <Form.Item  name="name" label="姓名" rules={[{ required: true }]}>
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
