import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Header() {
    return(
        <div>
            <Navbar expand="lg" className="poppins-medium">
                <Container className="py-3">
                    <Navbar.Brand  as={NavLink} to="/" title="Home Page" className="text-black"><b>Jane Cañabate</b> / <small  className="poppins-light">IT GRADUATE</small> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-lg-end text-center poppins-light fs-5">
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/project">Project</Nav.Link>
                        <Nav.Link as={NavLink} to="/experience">Experience</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header;