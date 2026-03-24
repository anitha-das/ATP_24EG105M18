function Nav()
{
     return (
        <nav className="flex justify-between bg-gray-200 p-4">
           <h1>Logo</h1>
           <ul className="flex justify-between gap-6">
            <li>Home</li>
            <li>Signup</li>
            <li>Login</li>
            <li>Learn More</li>
           </ul>
        </nav>
     )
}
export default Nav;