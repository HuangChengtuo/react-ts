import React from 'react'
import BlockA from './blockA'

export default class Playground extends React.Component {

  componentDidMount () {
    this.asyncFn().then(res => console.log(res))
  }

  asyncFn () {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('hct')
      }, 2000)
    })
  }

  render () {
    return <div className="page-1200">
      <BlockA text="hello" />
    </div>
  }
}
