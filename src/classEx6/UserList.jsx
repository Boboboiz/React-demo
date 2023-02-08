import React, { Component } from "react";
import { connect } from "react-redux";
import { actionDeleteUser,actionSelectUser } from "../redux/actions/userAction";

class UserList extends Component {
  handleDelete = (userId) => {
    this.props.dispatch(actionDeleteUser(userId));
  };

  handleSelect = (userId) => {
    this.props.dispatch(actionSelectUser(userId));
  };

  renderTable = () => {
    const { users, isLoading, error } = this.props;

    if (isLoading) {
      // return <Loading />
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return users.map((item, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{item.fullName}</td>
          <td>{item.username}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>
            <button
              className="btn btn-primary me-2"
              onClick={() => this.handleSelect(item.id)}
            >
              Chỉnh sửa
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(item.id)}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark">
          <h4 className="text-white">Danh sách</h4>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ Tên</th>
                <th>Tài Khoản</th>
                <th>SDT</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.fullName}</td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => this.handleSelect(item.id)}
                      >
                        Chỉnh sửa
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(item.id)}
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
  };
};
export default connect(mapStateToProps)(UserList);
