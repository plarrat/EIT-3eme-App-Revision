import NavbarApp from './components/NavbarApp/NavbarApp'

import { Container, Row, Col } from 'react-bootstrap'
import TodoList from './components/TodoList/TodoList'

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
          <Col md="4">
            <TodoList />
          </Col>

          <Col md="4">
            <TodoList />
          </Col>

          <Col md="4">
            <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
