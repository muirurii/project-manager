import {
  Card,
  CardGroup,
} from "react-bootstrap";
import Chart from "./Charts/Chart";
import LineGraph from "./Charts/LineGraph";

const HeroLogged = () => {
  return (
    <div className="mb-4">
      <h1 className="my-5">
        Welcome back <span className="text-primary">John Doe</span>
      </h1>
      <div className="w-100 d-flex" style={{height:"400px",width:"100vw"}}>
        <div className="w-100 d-flex">
        <Chart />
        <Chart />
        </div>
        <LineGraph />
      </div>
      {/* <CardGroup className="flex gap-2">
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
      </CardGroup> */}
    </div>
  );
};

export default HeroLogged;
