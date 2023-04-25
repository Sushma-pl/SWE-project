import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"

export class AddConference extends Component {
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
              <li>
                <Link to="/profile"> Back</Link>
              </li>
              <li className="active">
                <Link to="/profile/add-conference"> Add Conference</Link>
              </li>
            </ul>
          </div>
        </section>
        {/* Add form details here  */}
        <div className="profile">
          <div className="content">
            <h1>Add Conference</h1>
            <form action>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="cname">Conference Name</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="cname" tabIndex={1} />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="submission">Submission date</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="submission" tabIndex={6} />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="notification">Notification date</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="notification" tabIndex={6} />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="event">Event date</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="event" tabIndex={6} />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="location">Location</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="location" tabIndex={6} />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="core">Core rank</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="core" tabIndex={6} />
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
    );
  }
}

export default AddConference
