import { produce } from "immer";
import * as actionTypes from "./constants/userConstants";

const initialState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
  searchTearm: "",
};

const reducer = (state = initialState, { type, payload }) => {
  const newState = produce(state, (draft) => {
    if (type === actionTypes.UPDATE_USER_LIST_PENDING) {
      draft.isLoading = true;
    }

    if (type === actionTypes.UPDATE_USER_LIST_FULFILLED) {
      draft.users = payload;
      draft.isLoading = false;
    }

    if (type === actionTypes.UPDATE_USER_LIST_REJECTED) {
      draft.isLoading = false;
      draft.error = payload;
    }

    if (type === actionTypes.UPDATE_SELECTED_USER) {
      draft.selectedUser = payload;
    }
    if (type === actionTypes.UPDATE_SEARCH_TERM) {
      draft.searchTearm = payload
    }
  });

  return newState;
};

export default reducer;
