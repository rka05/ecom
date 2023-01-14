import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { CartState } from '../contexts/Context'

const Header = () => {
  const {filterProductState : {searchString}, filterProductDispatch} = CartState()
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">E-Com</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
          <Form>
            <Form.Control 
              type='text'
              placeholder='Search Item'
              style={{width: 500}}
              value={searchString}
              onChange={(e) => {
                filterProductDispatch({
                  type: "SEARCH_PRODUCT",
                  payload: e.target.value
                })
              }}
            />
          </Form>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header