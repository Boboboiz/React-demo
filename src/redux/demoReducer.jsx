// default state
const initalState = {
    danhSach: [{id:1}] 
};

export const demoReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {   
    case "CHANGE_NAME":
      let danhSach = [...state.danhSach]  // copy lại ds mới có vùng nhớ mới 
      let data = { id: payload}  
      danhSach.push(data)
      return {...state, danhSach}; // luồng đi của property giải thích ngoài note: redux
    default:
      return {...state}
    }
  
};
