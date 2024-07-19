import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"


const App = () =>{
  return <>
  <Navbar></Navbar>
  <div className="home">
  <Sidebar/>
  <Home></Home>
  </div>
  
  </>

}

export default App; 