import React, { Component } from 'react'
import Footer from '../homePage/Footer'
import image from './Picture/Image_1.jpg'; 
import "./Alumni.css"

export class Alumni extends Component {
  render() {
    return (
        <div>
        {/* <!-- ======= Team Section ======= --> */}
     <section id="team" className="team alumni-bg">
        <div className="container">
  
          <div className="alumni-title">
            <h2>Alumni</h2>
            <div className="underline"></div>
          </div>
  
          <div className="row">
  
            <div className="col-lg-6">
              <div className="member d-flex align-items-start" >
                <div className="teampic"><img src={image} className="img-fluid rounded-circle" alt=""/></div>
                <div className="member-info">
                  <h4>V. Krishna Nandivada</h4>
                      <span>Phd Alumni</span>  
                      <div className="detalis mt-3">
                        <p className='fs-6'>
                         <b>Mentor:</b>  Professor Jyoti <br />
                         <b>Thesis:</b> Congestion Management techniques for adaptive routers for mesh NOCs <br />
                         <b>Graduation year:</b> 2020 <br />
                         <b>Current Position:</b> Asst. Professor at Dept. of CSE, IIT Guwahati   
                      </p>
                      </div>
                  <div className="social">
                    <a href=""><i className="fab fa-google scholar"></i></a>    
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className="member d-flex align-items-start" >
                <div className="teampic"><img src={image} className="img-fluid rounded-circle" alt=""/></div>
                <div className="member-info">
                  <h4>V. Krishna Nandivada</h4>
                      <span>Phd Alumni</span>  
                      <div className="detalis mt-3">
                        <p className='fs-6'>
                         <b>Mentor:</b>  Professor Jyoti <br />
                         <b>Thesis:</b> Congestion Management techniques for adaptive routers for mesh NOCs <br />
                         <b>Graduation year:</b> 2020 <br />
                         <b>Current Position:</b> Asst. Professor at Dept. of CSE, IIT Guwahati   
                      </p>
                      </div>
                  <div className="social">
                    <a href=""><i className="fab fa-google scholar"></i></a>    
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className="member d-flex align-items-start" >
                <div className="teampic"><img src={image} className="img-fluid rounded-circle" alt=""/></div>
                <div className="member-info">
                  <h4>V. Krishna Nandivada</h4>
                      <span>Phd Alumni</span>  
                      <div className="detalis mt-3">
                        <p className='fs-6'>
                         <b>Mentor:</b>  Professor Jyoti <br />
                         <b>Thesis:</b> Congestion Management techniques for adaptive routers for mesh NOCs <br />
                         <b>Graduation year:</b> 2020 <br />
                         <b>Current Position:</b> Asst. Professor at Dept. of CSE, IIT Guwahati   
                      </p>
                      </div>
                  <div className="social">
                    <a href=""><i className="fab fa-google scholar"></i></a>    
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className="member d-flex align-items-start" >
                <div className="teampic"><img src={image} className="img-fluid rounded-circle" alt=""/></div>
                <div className="member-info">
                  <h4>V. Krishna Nandivada</h4>
                      <span>Phd Alumni</span>  
                      <div className="detalis mt-3">
                        <p className='fs-6'>
                         <b>Mentor:</b>  Professor Jyoti <br />
                         <b>Thesis:</b> Congestion Management techniques for adaptive routers for mesh NOCs <br />
                         <b>Graduation year:</b> 2020 <br />
                         <b>Current Position:</b> Asst. Professor at Dept. of CSE, IIT Guwahati   
                      </p>
                      </div>
                  <div className="social">
                    <a href=""><i className="fab fa-google scholar"></i></a>    
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
      <Footer />
      </div>
    )
  }
}

export default Alumni
