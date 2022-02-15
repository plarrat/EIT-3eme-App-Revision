import { useState } from 'react'
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'

export default function TodoList() {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])

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

  return (
    <>
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
    </>
  )
}
