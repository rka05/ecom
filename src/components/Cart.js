import React, { useState, useEffect } from 'react'
import { Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { CartState } from '../contexts/Context'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
  const {productCartState: {cart}, productCartDispatch} = CartState()
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setCartTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0))
  }, [cart])
  
  return (
    <Row>
      <Col md={9}>
        <ListGroup>
          {cart.map((c) => (
            <ListGroup.Item key={c.id}>
              <Row>
                <Col md={2}>
                  <Image src={c.image} style={{height:100, width:100}} roundedCircle />
                </Col>
                <Col md={3}>
                  {c.name}
                </Col>
                <Col md={1}>
                  ${c.price}
                </Col>
                <Col md={3}>
                  <Form.Select 
                    value={c.qty}
                    onChange={(e) => {
                      productCartDispatch({
                        type: "UPDATE_CART_QUENTITY",
                        payload: {
                          id: c.id,
                          qty: e.target.value
                        }
                      })
                    }}
                  >
                    {[...Array(c.quantity)].map((_, index) => (
                      <option key={index+1} value={index+1}>{index+1}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={1}>
                  {c.quantity}
                </Col>
                <Col md={1}>
                  <AiFillDelete
                    size={25}
                    cursor="pointer"
                    onClick={() => {
                      productCartDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: c
                      })
                    }}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col md={3}>
        Total Cart Value: ${cartTotal}
      </Col>
    </Row>
  )
}

export default Cart