import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Radarcharttool.scss";

const Radarchart = ({ title, color, dataKey, chartData, radarData }) => {
  return (
    <div className="radarchart">
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
      <div className="radar-chart">
        <ResponsiveContainer width="99%" height={200}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Performance" dataKey="A" stroke={color} fill={color} fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="view-all">
        <Link to="/Radarchart" style={{ color }}>View all</Link>
      </div>
    </div>
  );
};

// Define PropTypes for type validation
Radarchart.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  radarData: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      A: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Radarchart;