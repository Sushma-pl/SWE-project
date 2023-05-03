import React, { Component } from 'react'
import "./ChangePassword.css"
import axios from "axios";
export class SignUp extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    redirectTo: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO - validate your input!

    const { username, password } = this.state;

    axios.post("/auth/signup", { username, password }).then((response) => {
      console.log(response);
      if (!response.data.error) {
        console.log("youre good");

      } else {
        console.log(response.data.error);
      }
    });
  };
  render() {
    const { username, password, confirmPassword } = this.state;
    return (
      <div className="ChangeAuthor-background">
        <div className="ChangeAuth-form-container">
          <form className="ChangeAuth-form">
            <div className="ChangeAuth-form-content">
              <h3 className="ChangeAuth-form-title">Sign up</h3>

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

              <div className="form-group mt-1">
                <label>Enter Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="enter password"
                  required
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group mt-1">
                <label>Re-enter Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="re-enter password"
                  required
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                />
              </div>

              <div className="d-grid gap-2 mt-3">
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn-primary"
                >
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

export default SignUp
