import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home({ scrollPosition }) {
    return (
        <Container id="home" className="d-flex flex-column justify-content-center">
            <Row>
                <Col className="text-center mb-5">
                    <Image className={(scrollPosition === 0) && "downEffect"} src="./images/portfolio-semih.jpeg" roundedCircle width="240" height="240" />
                </Col>
            </Row>
            <Row>
                <Col xs className={(scrollPosition === 0) ? "text-center upEffect" : "text-center"} >
                    <h1>Frontend Web Developer</h1>
                    <p>
                        I'm a Frontend Developer who is passionate about writing code,
                        solving problems, automating stuff, and building Single Page
                        Application.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home