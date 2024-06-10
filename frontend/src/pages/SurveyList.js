import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Card } from "react-bootstrap";

const SurveyCard = () => {
    return <Card className="text-center">
        <Card.Header>Survey Name</Card.Header>
        <Card.Body className="text-start">
            Survey Description: Lorem ipsum, blah blah blah, filler content here to pad out the size of the text wall...
        </Card.Body>
        <Card.Footer>
            <Link className="btn btn-light" to={`/`}>GO!</Link>
        </Card.Footer>
    </Card>
}

function SurveyList () {
    return <div className="text-white">
        <div className="subSubNav text-end pe-5 font-comfortaa mb-4 py-2"><i>Available Surveys</i></div>
        <Container className="font-nunito">
            <Row>
                <Col className="mb-3" xs={6} lg={4} xl={3}>
                    <SurveyCard/>
                </Col>
                <Col className="mb-3" xs={6} lg={4} xl={3}>
                    <SurveyCard/>
                </Col>
                <Col className="mb-3" xs={6} lg={4} xl={3}>
                    <SurveyCard/>
                </Col>
                <Col className="mb-3" xs={6} lg={4} xl={3}>
                    <SurveyCard/>
                </Col>
            </Row>
        </Container>
    </div> 
}

export default SurveyList;