import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UserProfile = () => {
  const {pathname} = useLocation();
  const param = useParams();
  console.log(param.id)

  return (
    <div>
      <p>UserProfile</p>
      <p>{param.id}</p>
    </div>
  )
}

export default UserProfile