import React, { Component } from 'react'
import "./Visitor.css"
import image1 from "./Picture/Image_1.jpg"
import image2 from "./Picture/Image_2.jpg"


export class Visitor extends Component {
  render() {
    return (
      <div>
        <section id="visitorteam" className="visitorteam section-bg">
        <div className="container">

          <div className="vsection-title">
            <h2>VISITORS</h2>
            <div className="underline"></div>
          </div>

          <div className="row">

            <div className="col-lg-6">
              <div className="visitor d-flex align-items-start" >
                <div className="visitorpic"><img src={image1} className="img-fluid" alt=""/></div>
                <div className="visitor-info">
                  <h4>V. Krishna Nandivada</h4>
                   {/* <!--<span>Professor</span>-->    */}
                  <p> <br/>
                    <b>Affliation:</b> University of Edinburgh, UK <br/>
                    <b>Vist Date:</b> 12/12/20 <br/> <br/></p>
                    <button className="favorite styled"
                         type="button">
                         Website
                    </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="visitor d-flex align-items-start" >
                <div className="visitorpic"><img src={image2} className="img-fluid" alt=""/></div>
                <div className="visitor-info">
                  <h4>Madhu Mutyam</h4>
                 {/* <!-- <span>Assistant Professor</span>--> */}
                  <p> <br/>
                    <b>Affliation:</b> IBM IRL Delhi, India <br/>
                    <b>Vist Date:</b> 14/12/20 <br/> <br/></p>
                    <button className="favorite styled"
                         type="button">
                         Website
                    </button>
                </div>
              </div>
            </div>

        </div>

        </div>
      </section>
     
      </div>
    )
  }
}

export default Visitor
