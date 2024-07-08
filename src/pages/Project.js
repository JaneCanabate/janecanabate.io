import { Card, Col, Container, Row, Image } from "react-bootstrap";
import project1 from '../images/profile.jpg';

function About() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="radius-0 p-2 border-0 shadow w-md-75 w-lg-100 m-auto">
                        <Card.Title className="text-center fw-bold">title of proejct</Card.Title>
                            <Row lg={2} xs={1}>
                                <Col className="radius-0 m-auto">
                                    <div className="overflow-hidden p-2 p-lg-4 d-flex justify-content-center">
                                        <Image src={project1} fluid className="zoom" />
                                    </div>
                                </Col>
                                <Col className="radius-0 m-auto text-justify ps-lg-0 pe-lg-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lacinia turpis. Sed lacinia, ligula et facilisis tincidunt, ex dui semper dui, id mollis mauris enim nec orci. Etiam vulputate augue sit amet bibendum interdum.
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Card className="w-50 border-end-2 radius-0 bg-transparent"></Card>
                <Row>
                    <Col>
                        <Card className="radius-0 p-2 border-0 shadow w-md-75 w-lg-100 m-auto">
                        <Card.Title className="text-center fw-bold">title of proejct</Card.Title>
                            <Row lg={2} xs={1}>
                                <Col className="radius-0 m-auto">
                                    <div className="overflow-hidden p-2 p-lg-4 d-flex justify-content-center">
                                        <Image src={project1} fluid className="zoom" />
                                    </div>
                                </Col>
                                <Col className="radius-0 m-auto text-justify ps-lg-0 pe-lg-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lacinia turpis. Sed lacinia, ligula et facilisis tincidunt, ex dui semper dui, id mollis mauris enim nec orci. Etiam vulputate augue sit amet bibendum interdum.
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default About;