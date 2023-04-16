import React, { Component } from "react";
import CarouselComponent from "./Carousel";
import Footer from "./Footer";
import Contents from "./Contents";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <main>
          <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
          <div className="container-0 mx-6">
            <div className="row">
              <CarouselComponent />
            </div>
            <div className="row mx-3">
              <Contents />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
