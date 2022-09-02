import { useState, useEffect } from 'react'

export default function Ua () {
  const [ua, setUa] = useState('')
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setUa(window.navigator.userAgent)
    setWidth(document.body.clientWidth)
  }, [])
  return <div id="ua-page">
    <div className="info-item">
      <span className="label">User Agent</span>
      {ua}
    </div>
    <div className="info-item">
      <span className="label">Width</span>
      {width}px
    </div>
  </div>
}
