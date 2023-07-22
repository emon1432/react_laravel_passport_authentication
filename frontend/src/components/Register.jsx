import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    message: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password_confirmation } = this.state;
    const data = { name, email, password, password_confirmation };
    axios
      .post("/register", data)
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
    if (localStorage.getItem("token")) {
      return <Navigate to="/profile" />;
    }
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Register</h1>
              <form onSubmit={this.handleSubmit}>
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
                    name="name"
                    onChange={(e) => this.setState({ name: e.target.value })}
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
                  <label
                    htmlFor="password_confirmation"
                    className="form-label mb-3"
                  >
                    Password Confirmation
                  </label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="password_confirmation"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    onChange={(e) =>
                      this.setState({ password_confirmation: e.target.value })
                    }
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
