const initialState = {
    cartItems: [],
    total: 0
}
const cartReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CART":
            console.log(state, payload)
            const { total } = state
            return {
                ...payload,
                total: parseInt(total) + 1
            }
        case "MODIFY_QUANTITY":
            return {
                ...payload,
            }
        case "LOAD_CART":
            return {
                ...payload,
            }
        case "DELETE_CART_ITEM":
            return {
                ...payload,
            }
        default:
            return state
    }

}


export default cartReducer