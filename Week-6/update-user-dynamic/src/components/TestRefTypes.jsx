import  {useState} from "react";
function TestRefTypes()
{
    const [user,SetUser]=useState({username:"Anitha",age:"19",city:"Hyd"});
    const [marks,SetMarks]=useState([10,20,30]);

    //Update the user
    const updateUser=()=>{
          SetUser({...user,username:"Anitha Das"});
    }
    const updateMarks=()=>{
        SetMarks([...marks,40,50])
    }
    return (
        <div className="text-center mt-3">
        <p className="text-2xl">UserName:{user.username}</p>
        <p className="text-2xl">Age:{user.age}</p>
        <p className="text-2xl">City:{user.city}</p>
        <button onClick={updateUser} className="p-3 bg-gray-500">Update User</button>

        {/* Updating marks */}
        {
            marks.map((mark)=>(
                <p className="text-2xl" key={mark}>{mark}</p>
            ))
        }
        <button onClick={updateMarks} className="p-3 bg-gray-500">updateMarks</button>
        </div>
    )
}
export default TestRefTypes;