import React from 'react'

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
    </div>
  }
}
