import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Github, Instagram, Linkedin, Envelope } from "react-bootstrap-icons";
// import { MDBIcon } from "mdbreact";

function Footer() {
    return (
        <Navbar id="footer" expand="lg" variant="dark" bg="dark" className="p-0">
            <Container >
                {/* <Navbar.Brand href="#">Tüm haklari saklidir.</Navbar.Brand> */}
                <Nav className="d-flex flex-row mx-auto">
                    <Nav.Link className="px-3" href="https://github.com/semihbeyzade"><Github /></Nav.Link>
                    <Nav.Link className="px-3" href="https://www.linkedin.com/in/semih-beyzade-örscelik/"><Linkedin /></Nav.Link>
                    
                    <Nav.Link className="px-3" href="https://instagram.com/captainbeyz"><Instagram /></Nav.Link>
                    <Nav.Link className="px-3" href="mailto:semihb.orscelik0@gmail.com"><Envelope /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer
