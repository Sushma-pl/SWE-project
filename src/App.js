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

        <div className="container-0 mx-6" >
          <div className="row">
            <Carousel />
          </div>
          <div className="row mx-3" >
            <Contents />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
