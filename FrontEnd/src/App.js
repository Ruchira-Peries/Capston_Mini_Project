import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Appoinments from "./pages/Appoinments";
import Staff from "./pages/Staff";
import Staff1 from "./pages/Staff1";
import Staff2 from "./pages/Staff2";
import Staff3 from "./pages/Staff3";
import Services from "./pages/Services";
import Signup1 from "./pages/StudentSignup";
import Signup2 from "./pages/DoctorSignup";
import Login from "./pages/Login";
import OnlineAppoinment from "./pages/OnlineAppointments";
import PhysicalAppoinment from "./pages/PhysicalAppoinment";
import Selection from "./pages/Selection";
import OTP from "./pages/OTP";
import StudentProfile from "./pages/StudentProfile";
import AppointmentCheck from "./pages/AppointmentCheck";
import StudentsRecordsCheck from "./pages/StudentsRecordsCheck";
import Counseling from "./pages/Counseling";
import StudentProfileDetails from "./pages/StudentProfileDetails";
import Profile from "./pages/Profile";
function App() {
  
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/appoinments" element={<Appoinments></Appoinments>}/>
          <Route path="/staff" element={<Staff></Staff>}/>
          <Route path="/staff1" element={<Staff1></Staff1>}/>
          <Route path="/staff2" element={<Staff2></Staff2>}/>
          <Route path="/staff3" element={<Staff3></Staff3>}/>
          <Route path="/services" element={<Services></Services>}/>
          <Route path="/signup1" element={<Signup1></Signup1>} />
          <Route path="/signup2" element={<Signup2></Signup2>} />
          <Route path="/login" element = {<Login></Login>} />
          <Route path="/onlineappointments" element = {<OnlineAppoinment></OnlineAppoinment>} />
          <Route path="/physicalappoinment" element = {<PhysicalAppoinment></PhysicalAppoinment>} />
          <Route path="/otp" element = {<OTP></OTP>} />
          <Route path="/selection" element = {<Selection></Selection>} />
          <Route path="/studentprofile" element = {<StudentProfile></StudentProfile>} />
          <Route path="/AppointmentCheck" element = {<AppointmentCheck></AppointmentCheck>} />
          <Route path="/StudentsRecordsCheck" element = {<StudentsRecordsCheck></StudentsRecordsCheck>} />
          <Route path="/Counseling" element = {<Counseling></Counseling>} />
          <Route path="/StudentProfileDetails" element = {<StudentProfileDetails></StudentProfileDetails>} />
          <Route path="/Profile" element = {<Profile></Profile>} />

        </Routes>

     </Router>


    </div>
  );
}

export default App;