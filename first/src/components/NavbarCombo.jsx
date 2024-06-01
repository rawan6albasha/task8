
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/style/navbar.css'

function NavbarCombo() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " bg="light" data-bs-theme="light" fixed="top" style={{ backgroundColor:'#ffffff'}} >
            <Container >
                <Navbar.Brand href="#home" >
                    <img style={{ width: 100}}
                        src="/src/assets/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Text>Digital marketing agency</Navbar.Text>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Services</Nav.Link>
                        <Nav.Link href="#deets">Portfolio</Nav.Link>
                        <Nav.Link href="#deets">Clients&Partners</Nav.Link>
                        <Nav.Link href="#deets">X Academy</Nav.Link>
                        <Nav.Link href="#deets">About Us</Nav.Link>
                        <Nav.Link href="#deets">Let`s Talk</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarCombo;