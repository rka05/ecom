import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { CartState } from '../contexts/Context'

const Filters = () => {
  const {filterProductState: { outOfStock, fastDelivery }, filterProductDispatch} = CartState()

  return (
    <React.Fragment>
      <Form>
        <Row>
          <Form.Check 
            type="radio"
            label="Ascending"
            name="price-sort"
            onClick={(e) => {
              filterProductDispatch({
                type: "PRICE_SORT",
                payload: "LowToHigh"
              })
            }}
          />
        </Row>
        <Row>
          <Form.Check 
            type="radio"
            label="Descending"
            name="price-sort"
            onClick={(e) => {
              filterProductDispatch({
                type: "PRICE_SORT",
                payload: "HighToLow"
              })
            }}
          />
        </Row>
        <Row>
          <Form.Check 
            type="checkbox"
            label="Out of Stock"
            checked={outOfStock}
            onClick={(e) => {
              filterProductDispatch({
                type: "INCLUDE_OUT_OF_STOCK",
              })
            }}
          />
        </Row>
        <Row>
          <Form.Check 
            type="checkbox"
            label="Fast Delivery"
            checked={fastDelivery}
            onChange={(e) => {
              filterProductDispatch({
                type: "FAST_DELIVERY",
              })
            }}
          />
        </Row>
      </Form>
    </React.Fragment>
    
  )
}

export default Filters