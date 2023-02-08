const initalState = {
    cart: []
}

export const cartReducer = (state = initalState, action ) => {
    const {type, payload} = action
    switch (type) {
        case "THEM_GIO_HANG" :{
            let cart = [...state.cart]

            cart.push({...payload, soLuong: 1})
            return {...state , cart}
        }
        default : {
            return {...state}
        }
    }
}

// dùng state , props => 2 tầng component
// nhìu hơn ưu tiên dùng redux