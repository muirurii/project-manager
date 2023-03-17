import Chart from "./Charts/Chart";
import LineGraph from "./Charts/LineGraph";

const HeroLogged = () => {
  return (
    <div className="mb-4">
      <h1 className="my-5">
        Welcome back <span className="text-primary">John Doe</span>
      </h1>
      <div className="w-100 d-flex" style={{height:"350px",width:"100vw"}}>
        <div className="w-50 d-flex">
        <Chart />
        <Chart />
        </div>
        <LineGraph />
      </div>
    </div>
  );
};

export default HeroLogged;
