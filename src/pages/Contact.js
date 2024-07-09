import { Card, Col, Container, Row } from "react-bootstrap";

function Contact(){
    return(
        <div id="contact">
            <Container>
                <Row>
                    <Col>
                        <Card className="w-lg-75 m-auto border-0 shadow p-3">
                            <Row lg={1}>
                                <Col className="m-auto border-bottom border-primary border-2 py-lg-4">
                                    <Card.Title className="text-center fs-2 poppins-bold">Lets Connect!!</Card.Title>
                                    <Card.Title className="text-center py-lg-3">You can reach me via:</Card.Title>
                                    <div className='text-center '>
                                        <a href='https://github.com/JaneCanabate' ><i class="fs-1 px-3 bi bi-github text-primary"></i></a>
                                        <a href='https://www.instagram.com/ms.jcunahap?igsh=ZHBxcHQ1bzdxN2E4' ><i class="fs-1 px-3 bi bi-instagram text-primary"></i></a>
                                        <a href='jccanabate2001@gmail.com' ><i class="fs-1 px-3 bi bi-google text-primary"></i></a>
                                        <a href='https://www.facebook.com/jane.canabate.9' ><i class="fs-1 px-3 bi bi-facebook text-primary"></i></a>
                                    </div>
                                </Col>
                                    <Card.Title className="text-center">or</Card.Title>
                                <Col className=" border-top border-primary border-2">
                                    <Card.Title className="text-center py-lg-3 pt-lg-5 poppins-bold-italic">Call Me</Card.Title>
                                    <div className="text-center">
                                    <i class="fs-4 px-3 bi bi-telephone text-primary"> +639398304867</i>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;