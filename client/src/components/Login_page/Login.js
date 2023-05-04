// import React,{useState} from 'react'
import "font-awesome/css/font-awesome.min.css";
import React , {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Login.css";
export class Login extends Component {
  state = { email: "", success: false, error: false };

  onLogin = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    axios({
      url: "http://localhost:5000/auth/login",
      method: "POST",
      data: { email, password },
    })
      .then((res) => {
        window.localStorage.setItem("isAuthenticated", true);
        if (res.status === 200) {
          this.setState({ success: true, error: false });
          this.props.history.push("/");
        }
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.message, success: false });
      });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: false,
      success: false,
    });
  };

  render() {
    // const { email, password } = this.state;

    return (
      <div className="Author-background">
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={this.onLogin}>

            <div className="Auth-form-content">
              <h3 className="Auth-form-title">
                <i className="fas fa-user-circle icon-size"></i>
              </h3>

              <div className="form-group mt-3">
                <label>Enter email</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  required
                  name="email"

                  onChange={this.onChange}
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

                  onChange={this.onChange}
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
