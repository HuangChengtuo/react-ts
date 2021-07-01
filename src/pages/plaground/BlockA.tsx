import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {
  text: string,
  // ...
}

class Temp extends React.Component<Props> {
  constructor (props: Props) {
    super(props)
    console.log(props)
  }
  render () {
    return 'block a'
  }
}

const BlockA = withRouter(Temp)
export default BlockA
