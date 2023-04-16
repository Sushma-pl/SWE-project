import "./App.css";
import Navbar from "./components/homePage/Navbar";
import Login from "./components/Login_page/Login"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./components/homePage/Homepage";
import ConferencesPage from "./components/Research/ConferencesPage";
import SeminarsPage from "./components/Research/SeminarsPage";
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
      <Route exact path="/member/mentor" element={<Mentor/>} />      
      <Route exact path="/research/seminar" element={<SeminarsPage/>} />
      {/* here we can add another route to direct to appropriate page */}
      </Routes>    
    </div>
    </Router>
  );
}

export default App;
