import React from 'react'

const Button = ({children}) => {
  return (
    <div style={{border: "1px solid black", width: "80px", height: "20px"}}>
        {children}
    </div>
  )
}

export default Button