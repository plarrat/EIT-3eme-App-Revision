import NavbarApp from './components/NavbarApp/NavbarApp'
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavbarApp />

      <Container>
        <Row>
          <Col className="mt-5">
            <h1>Application TodoList</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <InputGroup className="mb-3">
              <FormControl placeholder="Saisir une tache" />
              <Button variant="primary">Ajouter</Button>
            </InputGroup>

            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
