import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Appoinments from "./pages/Appoinments";
import onlineAppoinments from "./pages/OnlineAppoinment";
import Staff from "./pages/Staff";
import Services from "./pages/Services";


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
          <Route path= "/onlineappoinment" element={<onlineAppoinments></onlineAppoinments>} />

        </Routes>
     </Router>
       
    
    </div>
  );
}

export default App;