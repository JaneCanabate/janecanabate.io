import {Container, Card, Nav, Image} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import profile from '../images/profile.jpg';

function Home() {
    return(
        <div>
            <Container fluid className="split-bg display-main">
                <Card className="wh-main zero mm-left border-0 bg-main">
                    <div className="mx-lg-auto mt-4">
                        <div className="d-flex justify-content-center"><Image src={profile} className='img-fluid rounded-circle w-75' /></div>
                        <h3 className="text-center mt-3">Jane Cañabate</h3>
                        <hr className="active"/>
                        <h5 className="text-center poppins-light">IT GRADUATE</h5> 
                    </div>
                    <Card.Footer className="bg-white mt-4 border-0 radius-0 d-flex justify-content-center gap-3">
                        <a href="link" rel="noreferrer" className="text-black text-decoration-none"><i class="bi bi-facebook fs-3"></i></a>
                        <a href="link" rel="noreferrer" className="text-black text-decoration-none"><i class="bi bi-github fs-3"></i></a>
                        <a href="link" rel="noreferrer" className="text-black text-decoration-none"><i class="bi bi-instagram fs-3"></i></a>
                    </Card.Footer>
                </Card>
                <Card className="w--25 ms-lg-5 mt-5 mt-lg-0 radius-0 border-0 p-lg-4 p-2 bg-transparent">
                    <h1 className="poppins-bold fs-large">Hello</h1>
                    <p className="fs-4 poppins-semibold">Here's who I am & what I do</p>
                    <div className="d-flex gap-4 py-2">
                            <Nav.Link as={NavLink} to="/about" className="btn border border-primary hover-primary rounded-pill px-2 w-100">About Me</Nav.Link>
                            <Nav.Link as={NavLink} to="/project" className="btn border border-primary hover-primary rounded-pill px-2 w-100">Project</Nav.Link>
                    </div>
                    <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lacinia turpis. Sed lacinia, ligula et facilisis tincidunt, ex dui semper dui, id mollis mauris enim nec orci. Etiam vulputate augue sit amet bibendum interdum.
                    </p>
                </Card>
            </Container>
        </div>
    );
}
export default Home;