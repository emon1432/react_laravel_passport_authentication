import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = { email, password };
    axios
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.setState({ loggedIn: true });
        this.props.setUser(res.data.user);
      })
      .catch((err) => {
        this.setState({ message: err.response.data.message });
      });
  };
  render() {
    if (this.state.loggedIn) {
      return <Navigate to="/profile" />;
    }
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Login</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label mb-3">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <label htmlFor="password" className="form-label mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>
                <p className="text-danger">{this.state.message}</p>
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
