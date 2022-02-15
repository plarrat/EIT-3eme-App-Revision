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
  Badge,
} from 'react-bootstrap'

function App() {
  const [inputTodo, setInputTodo] = useState('')
  const [mangas, setMangas] = useState([])

  let displayMangas = mangas.map((manga, index) => {
    return (
      <ListGroup.Item
        key={index}
        onDoubleClick={() => updateTodo(index, manga)}
      >
        {index + 1}. {manga}
        <Button
          variant="danger"
          size="sm"
          className="float-end"
          onClick={() => {
            deleteTodo(index)
          }}
          onDoubleClick={(e) => e.stopPropagation()}
        >
          Supprimer
        </Button>
      </ListGroup.Item>
    )
  })

  function addTodo() {
    let tmp = [...mangas]
    tmp.push(inputTodo)
    setMangas(tmp)
    setInputTodo('')
  }

  function deleteTodo(index) {
    let tmp = [...mangas]
    tmp.splice(index, 1)
    setMangas(tmp)
  }

  function updateTodo(index, manga) {
    let res = window.prompt('Modification de la donnée : ', manga)
    if (res === null || res.trim().length === 0) return null
    let tmp = [...mangas]
    tmp[index] = res
    setMangas(tmp)
  }

  return (
    <div className="App">
      <NavbarApp />

      <Container>
        <Row>
          <Col className="mt-5">
            <h1>
              Application TodoList{' '}
              <Badge pill bg="primary" className="fs-4">
                {mangas.length}
              </Badge>
            </h1>
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
