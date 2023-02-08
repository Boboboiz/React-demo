import React, { Component } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { connect } from "react-redux";
import { actionFetchUsers } from "../redux/actions/userAction";
import SearchUser from "./SearchUser";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Quản lý Người dùng</h1>
        <UserForm />
        <SearchUser />
        <UserList />
      </div>
    );
  }

  componentDidMount() {
    // call api
    // this.fetchUsers();

    // dispatch actionFetchUsers
    this.props.dispatch(actionFetchUsers());
  }
}

export default connect()(Home);
