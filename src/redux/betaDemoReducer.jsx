import produce from "immer";
const initialState = {
    dataCarousel : {},
    lineChartTicker: '',
    chartData: {},
    colChartTicker:'',
    colChartData: {},
};

const reducer = (state = initialState, { type, payload }) => {
  const newState = produce(state, (draft) => {
    if(type === 'betaDemo/DATA_CAROUSEL') {
        draft.dataCarousel = payload
    }
    if(type === 'betaDemo/LINE_CHART_TICKER') {
        draft.lineChartTicker = payload
    }
    if(type === 'betaDemo/LINE_CHART_DATA') {
        draft.chartData = payload
    }
    if(type === 'betaDemo/COL_CHART_TICKER') {
      draft.colChartTicker = payload
    }
    if(type === 'betaDemo/COL_CHART_DATA') {
      draft.colChartData = payload
    }
  });
  return newState
};

export default reducer;



  