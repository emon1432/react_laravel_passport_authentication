import axios from "axios";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Nav from "./Nav";

export class Header extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    axios
      .get("/user")
      .then((res) => {
        this.setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <div>
        <Nav user={this.state.user} setUser={this.setUser} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/profile"
            element={<Profile user={this.state.user} />}
          />
          <Route exact path="/login" element={<Login setUser={this.setUser} />} />
          <Route exact path="/register" element={<Register setUser={this.setUser} />} />  
        </Routes>
      </div>
    );
  }
}

export default Header;
