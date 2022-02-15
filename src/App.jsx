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
  const [todos, setTodos] = useState([])

  let displayTodos = todos.map((todo, index) => {
    return (
      <ListGroup.Item key={index} onDoubleClick={() => updateTodo(index, todo)}>
        {index + 1}. {todo}
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
    let tmp = [...todos]
    tmp.push(inputTodo)
    setTodos(tmp)
    setInputTodo('')
  }

  function deleteTodo(index) {
    let tmp = [...todos]
    tmp.splice(index, 1)
    setTodos(tmp)
  }

  function updateTodo(index, todo) {
    let res = window.prompt('Modification de la donnée : ', todo)
    if (res === null || res.trim().length === 0) return null
    let tmp = [...todos]
    tmp[index] = res
    setTodos(tmp)
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
                {todos.length}
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

            <ListGroup variant="flush">{displayTodos}</ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
