import React from 'react'

import { useContext } from 'react'
import { counterContextObj } from  "../contexts/ContextProvider"
function EditCounter4() {
  const {counter,increementCounter,decreementCounter}=useContext(counterContextObj);
  return (
    <div className='text-center'>
        <h1>EditCounter4</h1>
      <h1 className='text-4xl' >{counter}</h1>
      <button onClick={increementCounter} className='bg-amber-100 p-5 m-2'>+</button>
      <button onClick={decreementCounter} className='bg-amber-100 p-5'>-</button>
    </div>
)
}

export default EditCounter4