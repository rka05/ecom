import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayAllProducts from "../components/DisplayAllProducts"
import Cart from "../components/Cart"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DisplayAllProducts />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes