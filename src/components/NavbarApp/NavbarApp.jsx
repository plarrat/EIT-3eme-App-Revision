import { Navbar, Container, Nav, Button } from 'react-bootstrap'

export default function NavbarApp(props) {
  const { liste, setListe } = props

  function addListe() {
    let res = window.prompt('Saisir le nom de la nouvelle liste')
    if (res === null || res.trim().length === 0) return null
    const item = { titre: res.trim(), todos: [] }
    let tmp = [...liste]
    tmp.push(item)
    setListe(tmp)
    // setListe([...liste, item])
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Application Révision</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={addListe}>
            Nouvelle Liste
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
