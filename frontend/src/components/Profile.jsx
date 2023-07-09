import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>My Profile Card</h1>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">Name</p>
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">Email</p>
                  <h5 className="card-title">Password</h5>
                  <p className="card-text">Password</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
