import { Row, Col } from "react-bootstrap";
function Footer() {
    return(
        <div>
            <div className="poppins-medium p-3 mt-5">
                <Row>
                    <Col><p>© 2024 by Jane Cañabate.</p></Col>
                    <Col>
                        <div className="float-end">
                            <a target="_blank" href="https://www.facebook.com/jane.canabate.9" rel="noreferrer" className="text-black text-decoration-none"><i class="mx-1 bi bi-facebook fs-3"></i></a>
                            <a target="_blank" href="https://github.com/JaneCanabate" rel="noreferrer" className="text-black text-decoration-none"><i class="mx-1 bi bi-github fs-3"></i></a>
                            <a target="_blank" href="https://www.instagram.com/ms.jcunahap?igsh=ZHBxcHQ1bzdxN2E4" rel="noreferrer" className="text-black text-decoration-none"><i class="mx-1 bi bi-instagram fs-3"></i></a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Footer;