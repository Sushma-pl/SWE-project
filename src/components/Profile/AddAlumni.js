import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"

export class AddAlumni extends Component {
  render() {
    return (
      <div>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <section id="sidebar"> 
  {/* <div className="white-label">
  </div>  */}
  <div id="sidebar-nav">   
    <ul>
      <li><Link to="/profile"> Back</Link></li>
      <li className="active"><Link to="/profile/add-alumni"> Add Alumni</Link></li>      
    </ul>
  </div>
</section>
   {/* Add form details here  */}
   <div className="profile">
      <div className="content">
        <h1>Add Alumni</h1>
        <form action>
          {/* Photo */}
          <fieldset>
            <div className="grid-35">
              <label htmlFor="avatar">Photo</label>
            </div>
            <div className="grid-65">
              <span className="photo" title="Upload your Photo!" />
              <input type="file" className="btn" />
            </div>
          </fieldset>
          <fieldset>
            <div className="grid-35">
              <label htmlFor="fname">Name</label>
            </div>
            <div className="grid-65">
              <input type="text" id="fname" tabIndex={1} />
            </div>
          </fieldset>
          {/* Email */}
          <fieldset>
            <div className="grid-35">
              <label htmlFor="email">Mentor</label>
            </div>
            <div className="grid-65">
              <input type="text" id="mentor-name" tabIndex={6} />
            </div>
          </fieldset>
          {/* Description*/}
          <fieldset>
            <div className="grid-35">
              <label htmlFor="description">Thesis</label>
            </div>
            <div className="grid-65">
              <textarea
                name
                id
                cols={30}
                rows="auto"
                tabIndex={3}
                defaultValue={""}
              />
            </div>
          </fieldset>
          {/* Research area*/}
          <fieldset>
            <div className="grid-35">
              <label htmlFor="description">Graduation Year</label>
            </div>
            <div className="grid-65">
              <input type="text" id="grad-year" tabIndex={6} />
            </div>
          </fieldset>
          {/* Linkedin URL */}
          <fieldset>
            <div className="grid-35">
              <label htmlFor="linkedin">LinkedIn URL</label>
            </div>
            <div className="grid-65">
              <input type="text" id="linkedin" tabIndex={12} />
            </div>
          </fieldset>
          {/* Website URL */}
          <fieldset style={{ borderBottom: "none" }}>
            <div className="grid-35">
              <label htmlFor="website">Website URL</label>
            </div>
            <div className="grid-65">
              <input type="text" id="website" tabIndex={13} />
            </div>
          </fieldset>
          <fieldset className="buttons">
            <input
              type="button"
              className="Btn cancel"
              defaultValue="Cancel"
            />
            <input
              type="submit"
              className="Btn"
              defaultValue="Save Changes"
            />
          </fieldset>
        </form>
      </div>
    </div>
  </div>
    )
  }
}

export default AddAlumni
