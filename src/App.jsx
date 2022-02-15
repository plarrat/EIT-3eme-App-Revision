import NavbarApp from './components/NavbarApp/NavbarApp'

import { Container, Row, Col, Badge } from 'react-bootstrap'
import TodoList from './components/TodoList/TodoList'
import { useState, useEffect } from 'react'

function App() {
  const [liste, setListe] = useState([
    { titre: 'Films', todos: ['Star wars', 'Indiana Jones'] },
    { titre: 'Jeux Video', todos: ['Resident Evil'] },
  ])

  const [nbTotal, setNbTotal] = useState(0)

  useEffect(() => {
    let total = 0
    liste.forEach((item) => (total += item.todos.length))
    setNbTotal(total)
  }, [liste])

  let displayListe = liste.map((item, index) => {
    return (
      <Col md="4" key={'Liste-' + item.titre + '-' + index.toString()}>
        <TodoList titre={item.titre} todosParam={item.todos} />
      </Col>
    )
  })

  return (
    <div className="App">
      <NavbarApp />

      <Container>
        <Row>
          <Col className="mt-5">
            <h1>
              Application TodoList{' '}
              <Badge pill variant="primary" className="fs-4">
                {nbTotal}
              </Badge>
            </h1>
            <hr />
          </Col>
        </Row>

        <Row>{displayListe}</Row>
      </Container>
    </div>
  )
}

export default App
