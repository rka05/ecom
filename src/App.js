import { Container, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <AllRoutes />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
