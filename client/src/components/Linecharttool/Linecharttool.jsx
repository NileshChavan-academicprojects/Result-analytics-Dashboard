import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Linecharttool.scss";

const Linechart = ({ title, color, dataKey, chartData }) => {
  return (
    <div className="lineChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={200}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ stroke: color }}
              formatter={(value) => `${value}%`}
            />
            <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="view-all">
        <Link to="/Linechart" style={{ color }}>View all</Link>
      </div>
    </div>
  );
};

// Define PropTypes for type validation
Linechart.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Linechart;
