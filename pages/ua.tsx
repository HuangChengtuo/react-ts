import { useState, useEffect } from 'react'

export default function Ua () {
  const [ua, setUa] = useState('')
  const [bodyWidth, setBodyWidth] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setUa(window.navigator.userAgent)
    setBodyWidth(document.body.clientWidth)
    setScreenWidth(screen.width)
  }, [])

  return (
    <div id="ua-page">
      <div className="info-item">
        <span className="label">User Agent</span>
        {ua}
      </div>
      <div className="info-item">
        <span className="label">document.body.clientWidth</span>
        {bodyWidth}px
      </div>
      <div className="info-item">
        <span className="label">screen.width</span>
        {screenWidth}px
      </div>
    </div>
  )
}
