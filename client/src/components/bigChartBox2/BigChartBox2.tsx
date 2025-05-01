import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox2.scss";

const data = [
  {
    name: "Computer",
    Pass: 62,
    Fail: 7,
  },
  {
    name: "AIML",
    Pass: 35,
    Fail: 0,
  },
  {
    name: "Mechanical",
    Pass: 35,
    Fail: 0,
  },
  {
    name: "Electrical",
    Pass: 35,
    Fail: 0,
  },
  
];

const BigChartBox2 = () => {
  return (
    <div className="bigChartBox">
      <h1>7th Semester Results</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" tick={{ fill: '#ebebeb', fontSize: 14 }} />

            <YAxis tick={{ fill: '#ebebeb', fontSize: 14 }}/>
            <Tooltip />
            <Bar dataKey="Pass" fill="#8884d8" />
            <Bar dataKey="Fail" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox2;
