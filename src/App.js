import "./App.css";
import Navbar from "./components/homePage/Navbar";
import Carousel from "./components/homePage/Carousel";
import Footer from "./components/homePage/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Contents from "./components/homePage/Contents";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {/* first line is not being displayed, I don't know reason */}
        {/* <h2 className="mb-3">not needed</h2> */}
        <h1 className="mb-3">Welcome to Research lab IITH</h1>
        <h3 className="mb-3">Department of computer science</h3>

        <div className="container" >

        
          <div className="row">
            
              {/* <Carousel /> */}
           
          </div>
          <div className="row">
            <Contents/>
          </div>
       
        </div>

      </main>
    <Footer/>
    </div>
  );
}

export default App;