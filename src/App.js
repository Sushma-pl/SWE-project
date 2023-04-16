import "./App.css";
import Navbar from "./components/homePage/Navbar";
import Login from "./components/Login_page/Login"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./components/homePage/Homepage";
import ConferencesPage from "./components/Research/ConferencesPage";
import ForgotPassword from "./components/Login_page/ForgotPassword";
import ChangePassword from "./components/Login_page/ChangePassword";
import Mentor from "./components/Members/Mentor";



function App() {
  return (
    <Router>
    <div className="homepage">     
        <Navbar />
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/research/conference" element={<ConferencesPage/>} />
      <Route exact path="/login/forgot-password" element={<ForgotPassword/>} />
      <Route exact path="/login/change-password" element={<ChangePassword/>} />      
      <Route exact path="/member/mentor" element={<Mentor/>} />      
      {/* here we can add another route to direct to appropriate page */}
      </Routes>    
    </div>
    </Router>
  );
}

export default App;
