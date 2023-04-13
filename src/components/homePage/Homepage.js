import React, { Component } from 'react'
import Carousel from "./Carousel";
import Footer from "./Footer";
import Contents from "./Contents";

export class Homepage extends Component {
  render() {
    return (
      <div>
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
    )
  }
}

export default Homepage
