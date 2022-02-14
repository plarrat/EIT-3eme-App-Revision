import NavbarApp from './components/NavbarApp/NavbarApp'
import { useState } from 'react'
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
  const [inputTodo, setInputTodo] = useState('')
  const [mangas, setMangas] = useState(['Naruto', 'One Piece', 'One Punch Man'])

  let displayMangas = mangas.map((manga, index) => {
    return (
      <ListGroup.Item key={index}>
        {index + 1}. {manga}
      </ListGroup.Item>
    )
  })

  function addTodo() {
    let tmp = [...mangas]
    tmp.push(inputTodo)
    setMangas(tmp)
    setInputTodo('')
  }

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
              <FormControl
                placeholder="Saisir une tache"
                value={inputTodo}
                onChange={(e) => setInputTodo(e.target.value)}
              />
              <Button variant="primary" onClick={addTodo}>
                Ajouter
              </Button>
            </InputGroup>

            <ListGroup variant="flush">{displayMangas}</ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
