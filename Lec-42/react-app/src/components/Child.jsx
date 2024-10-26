import React from 'react'
import SubChild from './SubChild'

const Child = (props) => {
  return (
    <div>
        <p>Hello from Child</p>
        {/* <p>{props.name}</p>
        <p>{props.number}</p> */}
        <button onClick={()=>{
            props.getData("some data")
        }}>Click</button>
        <SubChild name={props.name} number={props.number}/>
    </div>
  )
}

export default Child