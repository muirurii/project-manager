import {
    Container,
    ListGroup,
    Row,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import {BiBook,BiUserPlus,BiBookAdd,BiGitBranch} from "react-icons/bi";

  const HeroVisitor = () => {
    return (
      <Container className="mb-4">
        <Row className="justify-content-center">
          <h1 className="my-5">
            Easily manage projects with
            <span className="text-primary d-inline-block">
             Pro</span>ject
            <span className="text-primary d-inline-block px-2">
               Manager
            </span>
          </h1>
        </Row>
        <Row className="justify-content-center align-items-center">
          <h2 className="my-4">How to get started</h2>
          <ListGroup className="list-group-flush ">
            <ListGroup.Item className="border-0">
              <BiBook className="d-inline-block mx-2 text-primary" height="60" width="60"  />
              Create Project</ListGroup.Item>
            <ListGroup.Item className="border-0">
              <BiUserPlus className="d-inline-block mx-2 text-primary" height="60" width="60" />
              Add team members
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <BiBookAdd className="d-inline-block mx-2 text-primary" height="60" width="60" />
              Assign tasks</ListGroup.Item>
            <ListGroup.Item className="border-0">
              <BiGitBranch className="d-inline-block mx-2 text-primary" height="60" width="60" />
              Track progress</ListGroup.Item>
          </ListGroup>
        </Row>
        <Link className="btn btn-primary btn-lg rounded-pill d-inline-lock my-4" to="/signup">
          Get started
        </Link>
      </Container>
    );
  };
  
  export default HeroVisitor;