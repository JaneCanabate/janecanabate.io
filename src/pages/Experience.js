import { Card, Col, Container, Row, Image } from "react-bootstrap";
import experience from '../images/christmas party.png';
import experience1 from '../images/plaza type.jpg';
import experience2 from '../images/shorting.jpg';
import experience3 from '../images/last.png';

function Experience() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="w-lg-50 border-0 shadow m-auto p-2 p-lg-3 text-justify position-relative">
                        <p className="position-absolute top-0 end-0 me-3 mt-1 fw-bold text-primary text-opacity-50">2024</p>
                        <h3 className="fw-bold">Christmas Party</h3>
                        <Row lg={2} xs={1}>
                                <Col className="radius-0 m-auto">
                                    <div className="overflow-hidden p-2 p-lg-4 d-flex justify-content-center">
                                        <Image src={experience} fluid className="zoom" />
                                    </div>
                                </Col>
                                <Col className="radius-0 m-auto text-justify ps-lg-0 pe-lg-4">
                                December 13, 2024 PHLpost Staff celebrating their christmas party held on Himamaylan Beach Resort.
                                They invited us to join with them as the part of their family.
                                </Col>
                            </Row>
                        </Card>
                        <Card className="w-50 border-end-2 radius-0 bg-transparent"></Card>
                        <Card className="w-lg-50 border-0 shadow m-auto p-2 p-lg-3 text-justify position-relative">
                        <p className="position-absolute top-0 end-0 me-3 mt-1 fw-bold text-primary text-opacity-50">2024</p>
                        <Card.Title className="text-center fw-bold">Plaza Type</Card.Title>
                            <Row lg={2} xs={1}>
                                <Col className="radius-0 m-auto">
                                    <div className="overflow-hidden p-2 p-lg-4 d-flex justify-content-center">
                                        <Image src={experience1} fluid className="zoom" />
                                    </div>
                                </Col>
                                <Col className="radius-0 m-auto text-justify ps-lg-0 pe-lg-4">
                                In this day we doing plaza type distribution of National Identification Card in barangay Oringao, Kabankalan City.
                                This experience is hard for me because it may challenging to faces any personalities of each people.
                                </Col>
                            </Row>
                        </Card>
                        <Card className="w-25 m-auto border-x radius-0 bg-transparent"></Card>
                        <Row>
                            <Col>
                                <Card className="w-lg-70 border-0 shadow ms-auto p-2 p-lg-3 text-justify position-relative">
                                <p className="position-absolute top-0 end-0 me-3 mt-1 fw-bold text-primary text-opacity-50">2024</p>
                                <h3 className="fw-bold">Shorting</h3>
                                <Row lg={2} xs={1}>
                                <Col className="radius-0 m-auto">
                                    <div className="overflow-hidden p-2 p-lg-4 d-flex justify-content-center">
                                        <Image src={experience2} fluid className="zoom" />
                                    </div>
                                </Col>
                                <Col className="radius-0 m-auto text-justify ps-lg-0 pe-lg-4">
                                In this day, we do a shorting of National Identification ID's. We short per barangay
                                and after that we short again per sitio that easy for us to search or to find.
                                </Col>
                            </Row>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="w-lg-70 border-0 shadow me-auto p-2 p-lg-3 text-justify position-relative">
                                <p className="position-absolute top-0 end-0 me-3 mt-1 fw-bold text-primary text-opacity-50">2024</p>
                                <h3 className="fw-bold">Encoding</h3>
                                <Row lg={2} xs={1}>
                                <Col className="radius-0 m-auto">
                                    <div className="overflow-hidden p-2 p-lg-4 d-flex justify-content-center">
                                        <Image src={experience3} fluid className="zoom" />
                                    </div>
                                </Col>
                                <Col className="radius-0 m-auto text-justify ps-lg-0 pe-lg-4">
                                We encode their name and ID's with their serial number that can easy to find in the monitor.
                                </Col>
                            </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Experience;