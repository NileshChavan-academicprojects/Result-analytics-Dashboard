import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Areacharttool.scss";

const Areachart = ({ title, color, dataKey, chartData }) => {
  return (
    <div className="areaChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={200}>
          <AreaChart data={chartData}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ stroke: color }}
              formatter={(value) => `${value}%`}
            />
            <Area type="monotone" dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="view-all">
        <Link to="/Areachart" style={{ color }}>View all</Link>
      </div>
    </div>
  );
};

// Define PropTypes for type validation
Areachart.propTypes = {
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

export default Areachart;
