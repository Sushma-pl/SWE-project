// import React,{useState} from 'react'
import "font-awesome/css/font-awesome.min.css";
import React , {Component} from "react";
import { Link } from "react-router-dom";
// import { redirect } from "react-router-dom";
import googleButton from "./google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./Login.css";
export class Login extends Component {
  state = {
    username: "",
    password: "",
    redirectTo: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    console.log("handleSubmit");

    this.props.login(username, password);
    this.setState({
      redirectTo: "/",
    });
  };

  render() {
      const { username, password } = this.state;


    return (
      <div className="Author-background">
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">
                <i className="fas fa-user-circle icon-size"></i>
              </h3>

              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter username"
                  required
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  required
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Login
                </button>
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
              </div>

              <div className="row">
                <div className="col-6 text-left">
                  <span className="forgot-password mt-2">
                    <Link to="/login/forgot-password">Forgot password?</Link>
                  </span>
                </div>
                <div className="col-6 text-right">
                  <span className="forgot-password mt-2">
                    <Link to="/login/change-password">Change password?</Link>
                  </span>
                </div>
              </div>

              {/* <span className="forgot-password text-left mt-2">
               <Link  to="/login/forgot-password">Forgot password?</Link>
            </span>

            <span className="forgot-password text-right mt-2">
               <Link  to="/login/change-password">change password?</Link>
            </span> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
