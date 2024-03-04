import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Appoinments from "./pages/Appoinments";
import Staff from "./pages/Staff";
import Services from "./pages/Services";
import Signup1 from "./pages/StudentSignup";
import Signup2 from "./pages/DoctorSignup";
import Login from "./pages/Login";
import OnlineAppoinment from "./pages/OnlineAppointments";
import PhysicalAppoinment from "./pages/PhysicalAppoinment";
import Selection from "./pages/Selection";
import OTP from "./pages/OTP";
import StudentProfile from "./pages/StudentProfile";


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
          <Route path="/signup1" element={<Signup1></Signup1>} />
          <Route path="/signup2" element={<Signup2></Signup2>} />
          <Route path="/login" element = {<Login></Login>} />
          <Route path="/onlineappointments" element = {<OnlineAppoinment></OnlineAppoinment>} />
          <Route path="/physicalappoinment" element = {<PhysicalAppoinment></PhysicalAppoinment>} />
          <Route path="/otp" element = {<OTP></OTP>} />
          <Route path="/selection" element = {<Selection></Selection>} />
          <Route path="/profile" element = {<StudentProfile></StudentProfile>} />
        </Routes>

     </Router>


    </div>
  );
}

export default App;