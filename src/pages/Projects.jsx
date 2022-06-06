import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Project() {
    const projects = [{ name: "Napoli's Pizza", url: "./images/projects/pizza.png" }, { name: "Movie Hub", url: "./images/projects/movie.png" }, { name: "Exchange Rates Api", url: "./images/projects/exchange.gif" }, { name: "Calculator", url: "./images/projects/calculator.png" }]
    return (
        // <Container fluid text-center id="project" className="my-5 p-5" style={{ backgroundColor: "rgb(167,237,219)" }} >
        <Container fluid text-center id="project" className="my-5 p-5 bg-dark">
            <h3 className="text-center mb-5 text-light" >Projects</h3>
            <Row xs={1} md={2} lg={3} className="g-4 align-items-md-center d-flex flex-row flex-nowrap" id="project" style={{ overflow: "scroll", scrollbarWidth: "none" }} >
                {projects.map((project, idx) => (
                    <Col>
                        <Card className="border-0 w-100 h-100">
                            <Card.Img
                                className="card-img"
                                variant="top"
                                src={project.url}
                            />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Project;