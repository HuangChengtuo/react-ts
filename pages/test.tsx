import { useState, useEffect } from "react";

export default function Test () {
  const [url, setUrl] = useState('')

  useEffect(() => {
    fetch('https://s1.huangchengtuo.com/img/DD.png').then(raw => raw.blob()).then(res => {
      const fr = new FileReader()
      fr.onload = e => setUrl(e.target.result as string)
      fr.readAsDataURL(res)
    })
  }, [])


  return <>
    <h1>test page</h1>
    <div>
      <img src={url} alt="dd" />
    </div>
  </>
}
