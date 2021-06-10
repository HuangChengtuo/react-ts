import './Playground.scss'
import { Spin } from 'antd'
import { useState } from "react";

export default function Playground () {
  const [loading, setLoading] = useState(false)

  return (
    <div id="playground">
      <button onClick={() => {setLoading(!loading)}}>loading</button>
      <Spin spinning={loading} className="test xxx">
        <div className="inner" style={{ height: '200px', border: '1px solid #000000' }}>66666</div>
      </Spin>
    </div>
  );
}
