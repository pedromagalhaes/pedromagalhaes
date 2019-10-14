import * as React from 'react'

const Count: React.FunctionComponent<{
  count: number
}> = (props) => {
  return <h1>You click {props.count} times</h1>
}

export default Count
