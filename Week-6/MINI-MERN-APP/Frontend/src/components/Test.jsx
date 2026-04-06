import { useContext } from 'react'
import {counterContextObj} from "../contexts/ContextProvider"
function Test() {
  const {counter1,changeCounter1}=useContext(counterContextObj);
  return (
    <div>
      <h1 className='text-4xl'>Counter1:{counter1}</h1>
      <button onClick={changeCounter1} className='bg-amber-100 p-5'>Change</button>
    </div>
  )
}
export default Test;
