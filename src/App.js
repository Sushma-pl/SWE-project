import "./App.css";
import Navbar from "./components/homePage/Navbar";
import Login from "./components/Login_page/Login"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/homePage/Homepage";

function App() {
  return (
    <Router>
    <div className="homepage">     
        <Navbar />
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route exact path="/login" element={<Login/>} />
      </Routes>
       
      
    </div>
    </Router>
  );
}

export default App;
