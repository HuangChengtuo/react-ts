import { NavLink } from 'react-router-dom'
import { Button } from 'antd'
import { connect, DispatchProp } from 'react-redux'
import { changeCount } from '@/store'

function ReduxB (props: { count: number } & DispatchProp) {
  function minus () {
    props.dispatch(changeCount(props.count - 1))
  }

  return (
    <div className="redux-b page-1200">
      <h1>redux B</h1>
      <div>count:{props.count}</div>
      <Button onClick={minus}>minus</Button>
      <br />
      <NavLink to="/redux/a">go to A</NavLink>
    </div>
  )
}

export default connect((state: any) => {
  return { count: state.count }
})(ReduxB)