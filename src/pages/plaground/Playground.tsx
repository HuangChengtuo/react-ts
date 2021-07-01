import React from 'react'
import BlockA from './BlockA'

export default class Playground extends React.Component {
  render () {
    return <div className="page-1200">
      <BlockA text="hello" />
    </div>
  }
}
