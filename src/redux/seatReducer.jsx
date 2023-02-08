import { CANCEL_SEAT, CHOOSE_SEAT } from "./constants/bookingTicketType";

const initialState = {
  choosingSeat: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_SEAT: {
      let choosingSeatUpdate = [...state.choosingSeat];
      let index = choosingSeatUpdate.findIndex(
        (choosingSeat) => choosingSeat.soGhe === payload.soGhe
      );
      if (index !== -1) {
        choosingSeatUpdate.splice(index, 1);
      } else {
        choosingSeatUpdate.push(payload);
      }
      state.choosingSeat = choosingSeatUpdate;
      return { ...state };
    }
    case CANCEL_SEAT: {
      let choosingSeatUpdate = [...state.choosingSeat];
      let index = choosingSeatUpdate.findIndex(
        (choosingSeat) => choosingSeat.soGhe === payload.soGhe
      );
      if (index !== -1) {
        choosingSeatUpdate.splice(index, 1);
      }
      state.choosingSeat = choosingSeatUpdate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
