import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"

export class EditNavbar extends Component {
  render() {
    return (
      <div>
        <section id="sidebar">
       <div id="sidebar-nav">   
    <ul>
      <li className="active"><Link to="/profile"> Edit Profile</Link></li>
      <li><Link to="/profile/add-conference"> Add Conference</Link></li>
      <li><Link to="/profile/post-announcement"> Post Announcement</Link></li>
      <li><Link to="/profile/post-news"> Post News</Link></li>
      <li><Link to="/profile/upload-pictures"> Upload Pictures to Gallery</Link></li>
      <li><Link to="/profile/add-visitor"> Add Visitor</Link></li>
      <li><Link to="/profile/add-alumni"> Add Alumni</Link></li>
      
    </ul>
  </div>
</section>
   {/* Add form details here  */}
  </div>
    )
  }
}

export default EditNavbar
