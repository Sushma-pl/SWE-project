import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./ForgotPassword.css"

export class ForgotPassword extends Component {
  render() {
    return (
        <div className="ForgotAuthor-background">
        <div className="ForgotAuth-form-container">
       <form className="ForgotAuth-form">
        <div className="ForgotAuth-form-content">
        <h3 className="ForgotAuth-form-title">
          Forgot Password
          {/* <i className='fas fa-user-circle icon-size'></i> */}
          </h3>
            
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                required
              />
              </div>
            

            <div className="form-group">
              <label>Institute Email-id</label>
              <input
                type="email"
                className="form-control mt-1 mb-1"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Send Reset Link
              </button>
              {/* <label>
              <input type="checkbox"  name="remember" /> Remember me
              </label> */}
            </div>

            {/* <h4 className='ForgotAuth-form-title'>Change password</h4> */}

            {/* <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                required
              />
            </div> */}

            {/* <div className="form-group">
              <label>Old Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div> */}

            {/* <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div> */}

            {/* <div className="form-group">
              <label>Re-enter New Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div>  */}

          </div>
        </form>
      </div>
      </div>
    )
  }
}

export default ForgotPassword
