import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
       <nav style={{border: "2px solid black"}}>
        <Link to="/login">Login</Link>
        <span>{"            "}</span>
        <Link to="/register">Register</Link>
        </nav> 
       <div style={{display: "flex"}}>
        <aside style={{border: "2px solid blue", width: "200px"}}> Aside </aside>
        <main style={{border: "2px solid green", flexGrow: 1}}> 
            {children}
        </main>
       </div>
    </div>
  )
}

export default Layout