import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Pointer 6 to 7", value: 1, color: "#0088FE" },
  { name: "Pointer 7 to 8", value: 24, color: "#00C49F" },
  { name: "Pointer 8 to 9", value: 26, color: "#FFBB28" },
  { name: "Pointer 9 to 10", value: 3, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox1">
      <h1>Grade Distribution</h1>
      <p>Computer</p>
      <div className="chart">
        <ResponsiveContainer width="60%" height={200}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
