import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import "./pieChartBox2.scss";

const data = [
  { name: "Pointer 6 to 7", value:  10},
  { name: "Pointer 7 to 8", value: 17 },
  { name: "Pointer 8 to 9", value: 6 },
  { name: "Pointer 9 to 10", value: 1 },
];

const COLORS = ["#8884d8", "#ffc658", "#82ca9d", "#d45087", "#ff6e54", "#4bc0c0", "#c9cbcf", "#7cb5ec"];

const PieChartBox1 = () => {
  return (
    <div className="PieChartBox2">
      <h1>Grade Distribution</h1>
      <p>AIML</p>
      <div className="chart2">
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartBox1;
