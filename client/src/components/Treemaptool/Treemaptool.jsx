import { Treemap, ResponsiveContainer, Tooltip } from "recharts";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Treemaptool.scss";

const TreemapChart = ({ title, color, dataKey, chartData }) => {
  return (
    <div className="treemapBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="80%" height={400}>
          <Treemap
            data={chartData}
            dataKey={dataKey}
            stroke="#fff"
            fill={color}
          />
        </ResponsiveContainer>
      </div>
      <div className="view-all">
        <Link to="/Treemachart" style={{ color }}>View all</Link>
      </div>
    </div>
  );
};

// Define PropTypes for type validation
TreemapChart.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TreemapChart;
