import {
  Card,
  CardGroup,
} from "react-bootstrap";

const HeroLogged = () => {
  return (
    <div className="container mb-4">
      <h1 className="my-5">
        Welcome back <span className="text-primary">John Doe</span>
      </h1>
      <CardGroup className="flex gap-2">
        <Card bg="light">
          <Card.Header className="bg-light">Projects</Card.Header>
          <Card.Body>
            <Card.Title>You have 10 ongoing projects</Card.Title>
            <Card.Text>Text here</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="light">
          <Card.Header className="bg-light">Projects</Card.Header>
          <Card.Body>
            <Card.Title>You have 10 ongoing projects</Card.Title>
            <Card.Text>
              Text here
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default HeroLogged;
