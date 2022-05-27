import toast from "react-hot-toast"

export const addToCart = (item) => async (dispatch) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cartItems)
    console.log(cartItems.includes(item))
    if (!cartItems.find(i => i._id === item._id)) {
        cartItems.push({ ...item, quantity: 1 })
        localStorage.setItem("cart", JSON.stringify(cartItems))
        toast.success(`${item.name} added to cart`)
        dispatch({
            type: "ADD_TO_CART",
            payload: { cartItems }
        })
    } else {
        toast.error(`${item.name} is already in your cart`)
    }
}

export const modifyQuantity = (item, quantity) => async (dispatch) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    const newArr = cartItems.map(i => {
        if (i._id === item._id) {
            return {
                ...i,
                quantity: parseInt(quantity)
            }
        } else {
            return { ...i }
        }
    })
    // !just add the values
    let total = 0
    localStorage.setItem('cart', JSON.stringify(newArr))
    newArr.forEach(i => {
        total += i.quantity ? parseInt(i.quantity) : 1
    })
    dispatch(
        {
            type: "MODIFY_QUANTITY",
            payload: { cartItems: newArr, total }
        }
    )
}

export const deleteItem = (item) => async (dispatch) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    const newArr = cartItems.filter(i => i._id !== item._id)
    let total = 0
    localStorage.setItem('cart', JSON.stringify(newArr))
    //! just subtract the value
    newArr.forEach(i => {
        total += i.quantity ? parseInt(i.quantity) : 1
    })
    dispatch(
        {
            type: "DELETE_CART_ITEM",
            payload: { cartItems: newArr, total }
        }
    )
}

export const loadCart = () => async (dispatch) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    let total = 0
    cartItems.forEach(i => {
        total += i.quantity
    })
    dispatch({
        type: "LOAD_CART",
        payload: { cartItems, total }
    })
}