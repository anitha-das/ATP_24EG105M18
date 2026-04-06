import { useState, useEffect } from "react";
import {useNavigate} from "react-router"
import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import axios from "axios";
function ListOfEmps() {
  const {counter,changeCounter}=useContext(counterContextObj);
  const [emps, setEmps] = useState([]);
   const navigate=useNavigate();

const gotoEmployee=(empObj)=>
{
  // navigate to /employee along with selected emp object
  navigate("/employee",{state:empObj});
}

const gotoEditEmployee=(empObj)=>
{
  // navigate to /employee along with selected emp object
  navigate("/edit-emp",{state:empObj});
}
const deleteEmpById=async(id)=>
{
  let res= await axios.delete(`http://localhost:4000/emp-api/employees/${id}`)
  if(res.status===200)
  {
    //get latest emps
    getEmps();
  }
}

async function getEmps() {
      let res = await fetch("http://localhost:4000/emp-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      } 
    }

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <div>
      <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-amber-100 p-5'>Change</button>
    </div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            <div className="flex justify-around">
              <button  onClick={()=>gotoEmployee(empObj)} className="bg-gray-400 rounded-2xl p-2">View </button>
              <button onClick={()=>gotoEditEmployee(empObj)} className="bg-gray-400 rounded-2xl p-2">Edit </button>
              <button onClick={()=>deleteEmpById(empObj._id)} className="bg-gray-400 rounded-2xl p-2" >Delete</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;  