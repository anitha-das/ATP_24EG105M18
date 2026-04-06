import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import Test from "./Test"
import {useCounterStore} from "../store/CounterStore"
function Home() {
  let {newCounter,increementCounter,decreementCounter}=useCounterStore();
  const {counter,changeCounter}=useContext(counterContextObj);
  return (
    <div>
      
      <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-amber-100 p-5'>Change</button>
      <Test/>
      <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={increementCounter} className='bg-amber-100 p-5'>Increement New Counter</button>
    </div>
  )
}

export default Home