import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  let navigate=useNavigate();
  return (
    <div>
       Welcome to Profile Page! <br/>
       <button onClick={()=>navigate('/about')}>Abount Link </button>
    </div>
  )
}

export default Profile