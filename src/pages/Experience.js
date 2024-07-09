import { Card, Col, Container, Row, Image } from "react-bootstrap";
import experience from '../images/profile.jpg';

function Experience() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="w-lg-50 border-0 shadow m-auto p-2 p-lg-3 text-justify position-relative">
                        <p className="position-absolute top-0 end-0 me-3 mt-1 fw-bold text-primary text-opacity-50">2024</p>
                        <h3 className="fw-bold">title</h3>
                        Indoor plants are ornamental plants that are grown indoors.
                                They are also known as houseplants, pot plants, or potted plants.
                                Indoor plants are mainly grown in residences and offices for decorative purposes.
                                Most houseplants are derived from plants native to the tropics and near tropics.
                        </Card>
                        <Card className="w-50 border-end-2 radius-0 bg-transparent"></Card>
                        <Card className="w-lg-50 border-0 shadow m-auto p-2 p-lg-3 text-justify position-relative">
                        <p className="position-absolute top-0 end-0 me-3 mt-1 fw-bold text-primary text-opacity-50">2024</p>
                        <h3 className="fw-bold">title</h3>
                        <Image src={experience} fluid className="max-xy" />
                        </Card>
                        <Card className="w-25 m-auto border-x radius-0 bg-transparent"></Card>
                        <Row>
                            <Col>
                                <Card className="w-lg-75 border-0 shadow ms-auto p-2 p-lg-3 text-justify position-relative">
                                <p className="position-absolute top-0 end-0 me-3 mt-1 fw-bold text-primary text-opacity-50">2024</p>
                                <h3 className="fw-bold">title</h3>
                                Indoor plants are ornamental plants that are grown indoors.
                                        They are also known as houseplants, pot plants, or potted plants.
                                        Indoor plants are mainly grown in residences and offices for decorative purposes.
                                        Most houseplants are derived from plants native to the tropics and near tropics.
                                </Card>
                            </Col>
                            <Col>
                                <Card className="w-lg-75 border-0 shadow me-auto p-2 p-lg-3 text-justify position-relative">
                                <p className="position-absolute top-0 end-0 me-3 mt-1 fw-bold text-primary text-opacity-50">2024</p>
                                <h3 className="fw-bold">title</h3>
                                Indoor plants are ornamental plants that are grown indoors.
                                        They are also known as houseplants, pot plants, or potted plants.
                                        Indoor plants are mainly grown in residences and offices for decorative purposes.
                                        Most houseplants are derived from plants native to the tropics and near tropics.
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