// import React,{useState} from 'react'
import React , {Component} from "react";
import "./Login.css";



export class Login extends Component {
  render() {
    return (
      <div className="Author-background">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login In</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <label>
              <input type="checkbox"  name="remember" /> Remember me
              </label>
            </div>
            <span className="forgot-password text-left mt-2">
               <a href="#">Forgot password?</a>
            </span>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
