import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Footer } from "./components/Footer";

const App = () => {
  return(<>
  <Navbar></Navbar>
  <div className="main">
    <Sidebar />
    <div>
      
      <Home></Home>
      
    </div>
    </div>
    <Footer/>
    </>
  )
};

export default App;
