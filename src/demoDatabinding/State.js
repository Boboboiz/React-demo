import React, { Component } from "react";

export default class State extends Component {
  state = {
    isLogin: false, // flag
  };
  login = () => {
    this.setState({
      isLogin: true,
    });
  };
  logout = () => {
    this.setState({
      isLogin: false,
    });
  };
  renderNav() {
    if (this.state.isLogin) {
      return (
        <div>
          <h4>Hé lô, Huy đẹp trai</h4>
          <button onClick={this.logout} className="btn btn-danger">Log out</button>
        </div>
      );
    }
    return (
      <div>
        <button className="me-2 btn btn-success">Sign up</button>
        <button onClick={this.login} className="btn btn-primary">
          Sign in
        </button>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>Demo State</h1>
        {this.renderNav()}
      </div>
    );
  }
}
