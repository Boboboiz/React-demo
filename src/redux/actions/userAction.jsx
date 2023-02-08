import axios from "axios";
import * as actionTypes from "../constants/userConstants";


export const actionFetchUsers = () => {
  // thunk function nhận được 2 tham số dispatch và getState
  // dispatch: Dùng để dispatch 1 action khác để đưa vào store
  // getState: Dùng để get state của store
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.UPDATE_USER_LIST_PENDING });
      const {searchTerm} = getState().userReducer // trả về toàn bộ state trong store
      const res = await axios({
        method: "GET",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users",
        params:{
          username: searchTerm || undefined
        }
      });

      dispatch({
        type: actionTypes.UPDATE_USER_LIST_FULFILLED,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.UPDATE_USER_LIST_REJECTED,
        payload: error.reponse.data || error.message,
      });
    }
  };
};

export const actionDeleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users/${userId}`,
      });

      // Call API delete user thành công
      // dispatch actionFetchUsers để call API get users và set state vào store
      dispatch(actionFetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionSelectUser = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users/${userId}`,
      });

      dispatch({
        type: actionTypes.UPDATE_SELECTED_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionCreateUser = (user) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "POST",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users",
        data: user,
      });
      // Call API create user thành công
      dispatch(actionFetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionUpdateUser = (id, user) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "PUT",
        url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users/${id}`,
        data: user,
      });
      // Call API update user thành công
      dispatch(actionFetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionUpdateSearchTerm = (searchTerm) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.UPDATE_SEARCH_TERM,
      payload: searchTerm,
    });
    dispatch(actionFetchUsers())
  };
};
