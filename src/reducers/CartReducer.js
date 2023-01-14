const CartReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return {...state, cart: [...state.cart, {...action.payload, qty:1}]}
    case "REMOVE_FROM_CART":
      return {...state, cart: state.cart.filter((cp) => 
        cp.id !== action.payload.id)}
    case "UPDATE_CART_QUENTITY":
      return {...state, cart: state.cart.filter((cp) => 
        cp.id === action.payload.id ? cp.qty = action.payload.qty : cp.qty)}
    default:
      return state
  }
}

export default CartReducer