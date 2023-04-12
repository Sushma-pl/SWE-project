import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from "../Login_page/Login"
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  
  
  

  render() {
    return (
        <header>   
      <div>
       <nav className="navbar navbar-light navbar-expand-md bg-body-tertiary fixed-top nav-color">
        <div className="container-fluid">

        <a className="navbar-brand h1 mt-2" href="/">Research Lab Management System</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav mx-auto  me-auto mx-20 mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/member" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                   Members
                </a>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/member/mentor">Mentor</a></li>
                    <li><a className="dropdown-item" href="/member/students">Students</a></li>                    
                    <li><a className="dropdown-item" href="/member/alumini">Alumini</a></li>                    
                    <li><a className="dropdown-item" href="/member/visitor">Visitor</a></li>                                       
                </ul>
                </li>
                
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/research" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Research
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/research/seminar">Seminar</a></li>
                    <li><a className="dropdown-item" href="/research/conference">Conference deadlines</a></li>                    
                    <li><a className="dropdown-item" href="/research/awards">Awards</a></li>                    
                    <li><a className="dropdown-item" href="/research/publications">Publications</a></li>                    
                    <li><a className="dropdown-item" href="/research/inventry">Inventory</a></li>                    
                    <li><a className="dropdown-item" href="/research/facilities">Facilities</a></li>                    
                </ul>
                </li>
                
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/gallery" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Gallery
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/gallery/photos">Photos</a></li>
                    <li><a className="dropdown-item" href="/gallery/video">Video</a></li>                                                         
                </ul>
                </li>
            </ul>
            {/*  */}
            <ul className="navbar-nav navbar-right">
              <li>
                <Link to="/login">
                  <span className="glyphicon glyphicon-log-in"></span>
                  <button type="button" className="btn btn-outline-info" >Login</button>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
      </header> 
    )
  }
}

export default Navbar
