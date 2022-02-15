import { useState, useEffect, useCallback } from 'react'
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap'

export default function TodoList(props) {
  const { titre, todosParam, setListe, liste, indexListe } = props

  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState(todosParam)

  const majParent = useCallback(() => {
    let tmpListe = [...liste]
    tmpListe[indexListe].todos = [...todos]
    setListe(tmpListe)
  }, [liste, indexListe, setListe, todos])

  useEffect(() => {
    if (JSON.stringify(todosParam) !== JSON.stringify(todos)) majParent()
  }, [todos, majParent, todosParam])

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
      <ListGroup.Item
        key={titre + '-' + index}
        onDoubleClick={() => updateTodo(index, todo)}
      >
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
      <h3>{titre}</h3>
      <hr />
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
