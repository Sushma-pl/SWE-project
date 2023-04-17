import "./App.css";
import Navbar from "./components/homePage/Navbar";
import Login from "./components/Login_page/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homePage/Homepage";
import ConferencesPage from "./components/Research/ConferencesPage";
import SeminarsPage from "./components/Research/SeminarsPage";
import ForgotPassword from "./components/Login_page/ForgotPassword";
import ChangePassword from "./components/Login_page/ChangePassword";
import Mentor from "./components/Members/Mentor";
import Alumni from "./components/Members/Alumni";
import Photos from "./components/gallery/photos";
import Videos from "./components/gallery/videos";
import Student from "./components/Members/Student";
import PublicationsPage from "./components/Research/PublicationsPage";
import Visitor from "./components/Members/Visitor";
import EditNavbar from "./components/Profile/EditNavbar";
import AddConference from "./components/Profile/AddConference";
import PostAnnouncement from "./components/Profile/PostAnnouncement";
import PostNews from "./components/Profile/PostNews";
import UploadPictures from "./components/Profile/UploadPictures";
import AddVisitor from "./components/Profile/AddVisitor";
import AddAlumni from "./components/Profile/AddAlumni";

function App() {
  return (
    <Router>
      <div className="homepage">
        <Navbar />
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/research/conference" element={<ConferencesPage/>} />
      <Route exact path="/research/seminar" element={<SeminarsPage/>} />
      <Route exact path="/research/publications" element={<PublicationsPage/>} />
      <Route exact path="/login/forgot-password" element={<ForgotPassword/>} />
      <Route exact path="/login/change-password" element={<ChangePassword/>} /> 
      <Route exact path="/member/students" element={<Student/>} /> 
      <Route exact path="/gallery/photos" element={<Photos/>} /> 
      <Route exact path="/gallery/video" element={<Videos/>} /> 
      <Route exact path="/member/alumni" element={<Alumni/>} />  
      <Route exact path="/member/mentor" element={<Mentor/>} />       
      <Route exact path="/member/visitor" element={<Visitor/>} />    
      <Route exact path="/profile" element={<EditNavbar/>} />      
      <Route exact path="/profile/add-conference" element={<AddConference/>} />      
      <Route exact path="/profile/post-announcement" element={<PostAnnouncement/>} />      
      <Route exact path="/profile/post-news" element={<PostNews/>} />      
      <Route exact path="/profile/upload-pictures" element={<UploadPictures/>} />      
      <Route exact path="/profile/add-visitor" element={<AddVisitor/>} />      
      <Route exact path="/profile/add-alumni" element={<AddAlumni/>} />      
      
      {/* here we can add another route to direct to appropriate page */}
      </Routes>
     </div>    
    </Router>
  );
}

export default App;
