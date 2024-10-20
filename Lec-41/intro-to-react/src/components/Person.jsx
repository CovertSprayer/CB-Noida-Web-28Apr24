import React from 'react'

function Person(props) {
  return (
    <div style={{border: "2px solid black"}}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Profession: {props.profession}</p>
    </div>
  )
}

export default Person