import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ReactDom.scss'

export default function ReactDom (): React.ReactElement {
  const re: React.ReactElement = React.createElement('div', { className: 'test', id: 'unique' }, 'React.ReactElement')
  const rn: React.ReactNode = <div>React.ReactNode</div>
  const jsx: JSX.Element = <div>JSX.Element</div>

  useEffect(() => {
    console.log(re)
    ReactDOM.render(re, document.getElementById('render-container'))
  }, [])

  return (
    <div id="playground">
      {jsx}
      {rn}
      {re}
      <div id="render-container"></div>
    </div>
  );
}
