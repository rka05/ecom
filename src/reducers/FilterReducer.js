const FilterReducer = (state, action) => {
  switch (action.type) {
    case "INCLUDE_OUT_OF_STOCK":
      return {...state, outOfStock: !state.outOfStock}
    case "FAST_DELIVERY":
      return {...state, fastDelivery: !state.fastDelivery}
    case "PRICE_SORT":
      return {...state, sort: action.payload}
    case "SEARCH_PRODUCT":
      return {...state, searchString: action.payload}
    default:
      return state
  }
}

export default FilterReducer