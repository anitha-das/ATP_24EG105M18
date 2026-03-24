import "./App.css"
import Nav from "./components/Nav";
import UserList from "./components/UserList";
import Footer from "./components/Footer"
function App()
{
  return(
    // <div className="text-amber-300 bg-amber-100" >Hello World</div>
    <div>
      <Nav/>
      <UserList/>
    <Footer/>
    </div>
  )
}
export default App;