import { Navbar, Container, Nav } from 'react-bootstrap'

export default function NavbarApp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Application Révision</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
