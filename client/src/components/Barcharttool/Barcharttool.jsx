import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Barcharttool.scss";

const BarChartComponent = ({ title, color, dataKey, chartData }) => {
  return (
    <div className="barChartBox1">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={200}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "rgba(255,255,255,0.2)" }}
              formatter={(value) => `${value}%`}
            />
            <Bar dataKey={dataKey} fill={color} barSize={30} radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="view-all">
        <Link to="/Barchart" style={{ color }}>View all</Link>
      </div>
    </div>
  );
};

// Define PropTypes for type validation
BarChartComponent.propTypes = {
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

export default BarChartComponent;
