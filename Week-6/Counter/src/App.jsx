import React from 'react'
import EditCounter1 from './components/EditCounter1'
import EditCounter2 from './components/EditCounter2'
import EditCounter3 from './components/EditCounter3'
import EditCounter4 from './components/EditCounter4'
function App() {
  return (
    <div className=' grid grid-cols-2' >
        <div className="p-5 m-10 bg-amber-50">
            <EditCounter1/>
        </div>
        <div className="p-5 m-10 bg-amber-50">
            <EditCounter2/>
        </div>
          <div className="p-5 m-10 bg-amber-50">
            <EditCounter3/>
        </div>
           <div className="p-5 m-10 bg-amber-50">
            <EditCounter4/>
        </div>
    </div>
  )
}

export default App