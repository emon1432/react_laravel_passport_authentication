import React, { Component } from "react";

class Profile extends Component {
  render() {
    let name = "Loading...";
    let email = "Loading...";
    if (this.props.user) {
      console.log(this.props.user);
      name = this.props.user.name;
      email = this.props.user.email;
    }
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>My Profile Card</h1>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">{name}</p>
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">{email}</p>
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
