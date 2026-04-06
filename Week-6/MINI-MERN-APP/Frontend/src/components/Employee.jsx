import React from 'react'
import { useLocation } from 'react-router'
function Employee() {
  //read state received in navigation
  const {state}=useLocation();
  return (
    <div className='p-16 text-left text-2xl bg-gray-400 rounded-2xl mx-10'>
      <p> Name:{state.name}</p>
      <p>Email:{state.email}</p>
      <p>Mobile No:{state.mobile}</p>
      <p>Designation:{state.designation}</p>
      <p>Company:{state.companyName}</p>
    </div>
  )
}

export default Employee