import {
    Container,
    ListGroup,
    Row,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  
  const HeroVisitor = () => {
    return (
      <Container className="mb-4">
        <Row className="justify-content-center">
          <h1 className="my-5">
            Easily manage projects with
            <span className="text-primary d-inline-block px-2">
              Project Manager
            </span>
          </h1>
        </Row>
        <Row className="justify-content-center align-items-center">
          <h2 className="my-4">How to get started</h2>
          <ListGroup className="list-group-flush ">
            <ListGroup.Item className="border-0">Register account</ListGroup.Item>
            <ListGroup.Item className="border-0">
              Invite team members
            </ListGroup.Item>
            <ListGroup.Item className="border-0">Assign tasks</ListGroup.Item>
            <ListGroup.Item className="border-0">Track progress</ListGroup.Item>
          </ListGroup>
        </Row>
        <Link className="btn btn-primary btn-lg d-inline-lock my-5" to="/signup">
          Get started
        </Link>
      </Container>
    );
  };
  
  export default HeroVisitor;