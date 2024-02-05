import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Appoinments from "./pages/Appoinments";
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
        </Routes>
     </Router>
       
    
    </div>
  );
}

export default App;
