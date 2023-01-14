import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CartState } from '../contexts/Context'
import Filters from "./Filters"
import ProductCards from "./ProductCards"

const DisplayAllProducts = () => {
  const {productCartState: {products}, filterProductState: {outOfStock, fastDelivery, sort, searchString}} = CartState()

  const transformProductData = () => {
    var allProducts = products

    if (searchString) {
      allProducts = allProducts.filter((ap) => ap.name.toLowerCase().includes(searchString.toLowerCase()))
    }

    if (outOfStock === false) {
      allProducts = allProducts.filter((ap) => ap.inStock)
    }

    if (fastDelivery === true) {
      allProducts = allProducts.filter((ap) => ap.fastDelivery)
    }

    if (sort) {
      allProducts = allProducts.sort((a,b) => (
        sort === "HighToLow" ? a.price - b.price : b.price - a.price
      ))
    }

    return allProducts
  }

  return (
    <Container>
      <Row>
        <Col md={2}>
          <Filters />
        </Col>
        <Col md={10}>
          <Row>
            {transformProductData().map((product) => (
              <Col md={3} key={product.id}>
                <ProductCards product={product} /><br/>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default DisplayAllProducts