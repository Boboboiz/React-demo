import React, { Component } from "react";
import { connect } from "react-redux";
import { actionUpdateSearchTerm } from "../redux/actions/userAction";
 class SearchUser extends Component {
  state = {
    searchTerms: "",
  };
  handleChange = (event) => {
    this.setState({
      searchTerms: event.target.value,
    });
  };
  handleSearch= ()=> {
    this.props.dispatch(actionUpdateSearchTerm(this.state.searchTerms))
  }
  render() {
    return (
      <div className="d-flex mt-3 mb-3 p-2">
        <input
          className="form-control me-2 "
          placeholder="Nhập username cần tìm"
          value={this.state.searchTerms}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-warning"
        
          onClick={this.handleSearch}
        >
          Tìm
        </button>
      </div>
    );
  }
}

export default connect()(SearchUser)