import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    projects: 14,
    tasks: 4,
  },
  {
    name: "Feb",
    projects: 3,
    tasks: 13,
  },
  {
    name: "March",
    projects: 6,
    tasks: 8,
  },
  {
    name: "April",
    projects: 7,
    tasks: 39,
  },
];

export default class LineGraph extends PureComponent {
  render() {
    return (
      <div className="w-100">
        <h3 className="my-3">Total tasks and projects</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="projects"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="tasks" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
