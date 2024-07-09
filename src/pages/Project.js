import { Card, Col, Container, Row, Image } from "react-bootstrap";
import project1 from '../images/indoor plants.png';
import project2 from '../images/SIMS.png';

function About() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="radius-0 p-2 border-0 shadow w-md-75 w-lg-100 m-auto">
                        <Card.Title className="text-center fw-bold">Indoor Plants</Card.Title>
                            <Row lg={2} xs={1}>
                                <Col className="radius-0 m-auto">
                                    <div className="overflow-hidden p-2 p-lg-4 d-flex justify-content-center">
                                        <Image src={project1} fluid className="zoom" />
                                    </div>
                                </Col>
                                <Col className="radius-0 m-auto text-justify ps-lg-0 pe-lg-4">
                                Indoor plants are ornamental plants that are grown indoors.
                                They are also known as houseplants, pot plants, or potted plants.
                                Indoor plants are mainly grown in residences and offices for decorative purposes.
                                Most houseplants are derived from plants native to the tropics and near tropics.
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Card className="w-50 border-end-2 radius-0 bg-transparent"></Card>
                <Row>
                    <Col>
                        <Card className="radius-0 p-2 border-0 shadow w-md-75 w-lg-100 m-auto">
                        <Card.Title className="text-center fw-bold">Student Internship Monitoring System</Card.Title>
                            <Row lg={2} xs={1}>
                                <Col className="radius-0 m-auto">
                                    <div className="overflow-hidden p-2 p-lg-4 d-flex justify-content-center">
                                        <Image src={project2} fluid className="zoom" />
                                    </div>
                                </Col>
                                <Col className="radius-0 m-auto text-justify ps-lg-0 pe-lg-4">
                                An internship is a structured chance given by an organization to students or recent graduates for gaining hands-on experience in a specific field or industry. It involves real-world tasks and responsibilities related to their academic or career interests, under supervision. Internships serve as a vital link between classroom learning and practical application, allowing participants to apply theoretical knowledge, develop essential skills, and expand professional networks. They are valuable for boosting resumes, exploring career paths, and often lead to potential full-time employment within the organization or industry. Internships vary in length, ranging from a few weeks to several months, and may be paid or unpaid depending on local laws and company policies.
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