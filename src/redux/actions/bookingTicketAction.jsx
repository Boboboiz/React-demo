import { CANCEL_SEAT, CHOOSE_SEAT } from "../constants/bookingTicketType"

export const chooseSeatAction = (numOfSeat) => {
    return {
        type:CHOOSE_SEAT,
        payload: numOfSeat
    }
}
export const cancelSeatAction = (numOfSeat)=> {
    return {
        type:CANCEL_SEAT,
        payload: numOfSeat
    }
}