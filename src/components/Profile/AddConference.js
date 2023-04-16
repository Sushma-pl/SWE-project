import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"

export class AddConference extends Component {
  render() {
    return (
      <div>
        <section id="sidebar"> 
  {/* <div className="white-label">
  </div>  */}
  <div id="sidebar-nav">   
    <ul>
      <li><Link to="/profile"> Back</Link></li>
      <li className="active"><Link to="/profile/add-conference"> Add Conference</Link></li>      
    </ul>
  </div>
</section>
   {/* Add form details here  */}
  </div>
    )
  }
}

export default AddConference
