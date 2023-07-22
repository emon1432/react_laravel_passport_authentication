import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    var auth = localStorage.getItem("token");

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Laravel Passport
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {auth && (
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
              )}
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {!auth && (
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {!auth && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                )}
                {auth && (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                      onClick={() => {
                        localStorage.removeItem("token");
                        this.props.setUser({});
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
