import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Register</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="form-label mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="name"
                    aria-describedby="nameHelp"
                    placeholder="Enter name"
                  />
                  <label htmlFor="email" className="form-label mb-3">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <label htmlFor="password" className="form-label mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-3">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
