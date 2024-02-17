import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Appoinments from "./pages/Appoinments";
import Staff from "./pages/Staff";
import Services from "./pages/Services";
import Signup from "./pages/signup1";
import Login from "./pages/login";
import OnlineAppoinment from "./pages/OnlineAppoinment";
import PhysicalAppoinment from "./pages/PhysicalAppoinment";



function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/appoinments" element={<Appoinments></Appoinments>}/>
          <Route path="/staff" element={<Staff></Staff>}/>
          <Route path="/services" element={<Services></Services>}/>
          <Route path="/signup1" element={<Signup></Signup>} />
          <Route path="/login" element = {<Login></Login>} />
          <Route path="/onlineappoinment" element = {<OnlineAppoinment></OnlineAppoinment>} />
          <Route path="/physicalappoinment" element = {<PhysicalAppoinment></PhysicalAppoinment>} />
        </Routes>

     </Router>
       
    
    </div>
  );
}

export default App;