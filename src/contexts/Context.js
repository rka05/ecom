import { faker } from '@faker-js/faker'
import React, { createContext, useContext, useReducer } from 'react'
import CartReducer from '../reducers/CartReducer'
import FilterReducer from '../reducers/FilterReducer'

const CartContext = createContext()

const Context = ({children}) => {
  const productList = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    productStock: faker.datatype.number(),
    image: faker.image.image(),
    quantity: faker.datatype.number({min:1, max: 10})
  }))

  const[productCartState, productCartDispatch] = useReducer(CartReducer, {
    products: productList,
    cart: []
  })

  const[filterProductState, filterProductDispatch] = useReducer(FilterReducer, {
    outOfStock: false,
    fastDelivery: false,
    searchString: ""
  })
  return (
    <CartContext.Provider value={{productCartState, productCartDispatch, filterProductState, filterProductDispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export const CartState = () => {
  return useContext(CartContext)
}

export default Context