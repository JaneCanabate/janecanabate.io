import { Container, Row, Col, Card, Image } from "react-bootstrap";
import stack1 from '../images/html5.png';
import stack2 from '../images/css.png';
import stack3 from '../images/bootstrap.png';
import stack4 from '../images/php.png';
import stack5 from '../images/js.png';
import stack6 from '../images/favicon.ico';
import profile from '..//images/joey.jpg';
function About() {
    return(
        <div>
            <Container>
                <Row lg={2} xs={1} className="g-4">
                    <Col>
                        <Card className="zero text-justify p-2 border-0 shadow radius-0">
                        <Card.Text className="fs-5 poppins-light p-3 py-5 border-bottom">For any sort of help or inquires, feel free to send me an <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDZBVVRvhzMmxJBpBNMcGWGfVtpbJLtqWVzgnZJVpqQfnwZLDkxtLSsbxQNdMDpTbHmbTFB" rel="noreferrer" >Email</a> and I'll get back to you soon.</Card.Text>
                        <Card.Title className="py-3 fw-bold">Social Links</Card.Title>
                            <Row>
                                <Col>
                                    <ul>
                                        <li className="py-2">
                                            <a href="facebook link here" className="text-decoration-none  animate fs-5 poppins-bold" >Facebook</a>
                                        </li>
                                        <li className="py-2">
                                            <a href="facebook instagram here" className="text-decoration-none  animate fs-5 poppins-bold" >Instagram</a>
                                        </li>
                                        <li className="py-2">
                                            <a href="facebook github here" className="text-decoration-none  animate fs-5 poppins-bold" >Github</a>
                                        </li>
                                        <li className="py-2">
                                            <a href="facebook Tiktok here" className="text-decoration-none  animate fs-5 poppins-bold" >Tiktok</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <Row lg={2} xs={2} className="g-4">
                                        <Col>
                                        <i class="bi fs-1 bi-facebook text-primary"></i>
                                        </Col>
                                        <Col>
                                        <i class="bi fs-1 bi-instagram  text-pink"></i>
                                        </Col>
                                        <Col>
                                        <i class="bi fs-1 bi-github"></i>
                                        </Col>
                                        <Col>
                                        <i class="bi fs-2 bi-tiktok bg-dark text-white px-1 rounded"></i>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Row lg={1} xs={1} className="g-2">
                            <Col>
                                <Card className="zero text-justify p-2 border-0 shadow radius-0">
                                    <Card.Title className="py-3 fw-bold">Recommendation</Card.Title>
                                    <Row lg={2} xs={1}>
                                        <Col lg={2} className="d-flex">
                                        <div className="m-auto w-100 zero">
                                                <Image src={profile} fluid className='rounded-circle w-100' /> 
                                        </div>
                                        </Col>
                                        <Col className="my-lg-auto">
                                        <div className="m-auto">
                                                <h6 className="fw-bold">Joey B. Baroquinna</h6>
                                                <h6 className="fw-bold">PHLpost ActingPost Master</h6>
                                        </div>
                                        </Col>
                                        <Col lg={12}>
                                            <p className="text-justify p-2">
                                            I can say that the office is lucky enough, to have her as an OJT students. Very Industrious, well manared, performs duties very well and a very responsible person. Hoping to have like her as OJT-Training in the near future.
                                            </p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="p-2 border-0 shadow radius-0">
                                    <Card.Title className="py-3 fw-bold">Technology Stack</Card.Title>
                                    <Container>
                                    <Row lg={3} xs={3} className="g-5">
                                        <Col>
                                            <Card className=" border-0 shadow">
                                                <Image src={stack1} alt='' fluid className="" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" border-0 shadow">
                                                <Image src={stack2} alt='' fluid className="" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" border-0 shadow">
                                                <Image src={stack3} alt='' fluid className="" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" border-0 shadow">
                                                <Image src={stack4} alt='' fluid className="" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" border-0 shadow">
                                                <Image src={stack5} alt='' fluid className="" />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" border-0 shadow">
                                                <Image src={stack6} alt='' fluid className="" />
                                            </Card>
                                        </Col>
                                    </Row>
                                    </Container>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default About;