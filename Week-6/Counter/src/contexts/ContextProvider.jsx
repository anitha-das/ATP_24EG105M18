import {createContext,useState} from "react";
//create context provider object
export const  counterContextObj=createContext()
function ContextProvider({children}) {
    const [counter,setCounter]=useState(0);
    //function to change state
    const increementCounter=()=>{
        setCounter(counter+1)
    }
     const decreementCounter=()=>{
        setCounter(counter-1)
    } 

  return (
    <counterContextObj.Provider value={{counter,increementCounter,decreementCounter}}>
        {children}
    </counterContextObj.Provider>
   
  )
}

export default ContextProvider;