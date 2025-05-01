import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./gradedistributionaiml.scss";

const COLORS = ["#8884d8", "#82ca9d", "#ff7300", "#ff6384", "#36a2eb", "#ffce56"];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 200 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const Piechart = ({ title }) => {
  return (
    <div className="pieChartbox">
      <h1>Grade Distribution</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px", color: "#fff" }}
              formatter={(value) => `${value}%`}
            />
            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={40} fill="#8884d8" />
            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="view-all">
        <Link to="/Gradedistribution" style={{ color: "#8884d8" }}>View all</Link>
      </div>
    </div>
  );
};

// Define PropTypes for type validation
Piechart.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Piechart;
