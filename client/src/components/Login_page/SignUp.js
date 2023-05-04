import React, { Component } from "react";
import "./ChangePassword.css";
import axios from "axios";
import { Link } from "react-router-dom";
import passport from "passport";
export class SignUp extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    success: false,
    error: false,
  };

  onSignup = (e) => {
    e.preventDefault();

    const { email, username, password } = this.state;

    axios({
      url: "http://localhost:5000/auth/register",
      method: "POST",
      data: { email, username, password },
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
    const { error, success } = this.state;
    return (
      <div className="ChangeAuthor-background">
        <div className="ChangeAuth-form-container">
          <form className="ChangeAuth-form" onSubmit={this.onSignup}>
            {success && "You've registered in successfully"}
            {error}
            <div className="ChangeAuth-form-content">
              <h3 className="ChangeAuth-form-title">Sign up</h3>

              <div className="form-group mt-1">
                <label>Enter e-mail</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="enter email"
                  required
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter username"
                  required
                  name="username"
                  value={username}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group mt-1">
                <label>Enter Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="enter password"
                  required
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  <Link to="/Login">Submit</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
