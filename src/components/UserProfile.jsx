import React from 'react'
import { useParams } from 'react-router-dom'

function UserProfile() {
    let {username}=useParams(); 
    return (
    <div>
      Welcome to UserProfile Page! 
      
      <div> For <h5> {username}</h5> </div>

    </div>    
  )
}

export default UserProfile