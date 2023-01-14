import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../contexts/Context'

const ProductCards = ({ product }) => {
  const {productCartState: {cart}, productCartDispatch} = CartState()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description.substr(0,30)}</Card.Text>
        <Card.Text>
          <strong>Fast Delivery:</strong> {product.fastDelivery ? "Yes" : "No"}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
          {
            product.inStock ? 
            (
              cart.some((c) => c.id === product.id) ? 
              (
                <Button 
                  variant="outline-danger"
                  onClick={() => {
                    productCartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product
                    })
                  }}
                >
                  Remove From Cart
                </Button>
              ) 
              : 
              (
                <Button 
                  variant="outline-primary"
                  onClick={() => {
                    productCartDispatch({
                      type: "ADD_TO_CART",
                      payload: product
                    })
                  }}
                >
                  Add To Cart
                </Button>
              )
            ) 
            : 
            (
              <Button 
                variant="outline-warning"
                disabled
              >
                Cooming Soon!!
              </Button>
            )
          }
      </Card.Body>
    </Card>
  )
}

export default ProductCards