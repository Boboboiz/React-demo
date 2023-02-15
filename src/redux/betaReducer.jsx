import { produce } from "immer"
import * as actionType from "./constants/betaConstants"
const initialState = {
    stocks: {

    },
    detail: {

    },
    type:"",
    name:"",
    ticker:"",
    chartData: {},
    chartData:{}
}

const reducer = (state = initialState, {type, payload}) => {
    const newState = produce(state, (draft)=> {
        if(type === actionType.UPDATE_STOCKS_LIST) {
            draft.stocks = payload
        }
        if(type === actionType.UPDATE_STOCKS_DETAIL) {
            draft.detail = payload
        }
        if(type === actionType.UPDATE_TYPE_STOCKS) {
            draft.type = payload
        }
        if( type === actionType.UPDATE_STOCKS_CHART) {
            draft.name = payload
        }
        if (type === actionType.UPDATE_DATA_CHART) {
            draft.chartData = payload
        }
    })
    return newState
}
export default reducer