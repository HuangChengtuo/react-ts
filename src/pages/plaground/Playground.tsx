import './Playground.scss'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

export default function Playground() {
  const router = useHistory()

  return (
    <div id="playground">
      playground
      <Button onClick={() => { router.push('/') }}>go home</Button>
    </div>
  );
}
