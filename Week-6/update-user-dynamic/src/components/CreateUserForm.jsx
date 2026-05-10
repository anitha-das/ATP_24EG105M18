
import { useState } from "react";
import { useForm } from "react-hook-form";

function CreateUserForm() {
  const [users, setUsers] = useState([]);
  const { register, handleSubmit } = useForm();

  //on form submit
  const onFormSubmit = (newUserObj) => {
    console.log(newUserObj);
    setUsers([...users, newUserObj]);
  };

  console.log(users);

  return (
    <div className="mt-5">
      {/* create User form */}
      <h1 className="text-5xl text-center">Create User</h1>
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        {/* First name */}
        <div className="mb-3">
          <label htmlFor="fn">FirstName</label>
          <input type="text" {...register("firstName")} id="fn" className="w-full p-3 border" />
        </div>
        {/* Email*/}
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} id="email" className="w-full p-3 border" />
        </div>
        {/* First name */}
        <div className="mb-3">
          <label htmlFor="fn">Date of Birth</label>
          <input type="date" {...register("dateOfBirth")} id="fn" className="w-full p-3 border" />
        </div>
        <button type="submit" className="bg-sky-300 p-3">
          Add New User
        </button>
      </form>

      {/* Table to dusplay List of Users */}
      <table className="mt-5 mx-auto text-2xl border border-collapse border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">First name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Date of Birth</th>
          </tr >
        </thead>
        <tbody>
          {users.map((userObj, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{userObj.firstName}</td>
              <td className="border border-gray-400 px-4 py-2">{userObj.email}</td>
              <td className="border border-gray-400 px-4 py-2">{userObj.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreateUserForm;