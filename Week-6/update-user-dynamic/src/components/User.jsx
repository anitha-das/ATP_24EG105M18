 function User(props) //userObj:{name:,email:.image:}
{
   const {userObj}=props; //Thats why destructuring is important
     return (
       <div className=" flex flex-col items-center bg-gradient-to-r from-pink-200 to-cyan-400 rounded-2xl p-3 h-70 w-80 justify-center">
        <img src={userObj.image} alt="Not Found" />
         <p>{userObj.name}</p>
         <p>{userObj.email}</p>
       </div>
     )
}
export default User;