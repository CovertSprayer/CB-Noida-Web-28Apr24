import React from 'react'

const SubChild = (props) => {
  return (
    <div>
        Hello from SubChild
        <p>{props.name}</p>
        <p>{props.number}</p>
    </div>
  )
}

export default SubChild