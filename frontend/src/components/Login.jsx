import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Login</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="email" className="form-label mb-3">
                    Email address</label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <label htmlFor="password" className="form-label mb-3">
                    Password</label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-3">
                  Login
                </button>
              </form>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
