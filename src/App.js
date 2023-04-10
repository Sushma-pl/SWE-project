import "./App.css";
import Navbar from "./components/homePage/Navbar";
import Carousel from "./components/homePage/Carousel";
import Footer from "./components/homePage/Footer";
import Contents from "./components/homePage/Contents";

function App() {
  return (
    <div className="homepage">
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="mb-3">Welcome to Research lab IITH</h1>
        <h3 className="mb-3">Department of computer science</h3>

        <div className="container-fluid">
          <div className="row">
            <Carousel />
          </div>
          <div className="row">
            <Contents />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
