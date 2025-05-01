import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Subjectwiseaiml.scss";

// Sample Data for Table
const sampleData = [
  { name: "M3", value: 60 },
  { name: "CG", value: 45 },
  { name: "MP", value: 30 },
  { name: "AI", value: 50 },
];

const Individual = ({ title, color }) => {
  return (
    <div className="subject">
      <h1>{title}</h1>

      {/* Table for Better Data Representation */}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="view-all">
        <Link to="/Subjectsemesteraiml" style={{ color }}>View all</Link>
      </div>
    </div>
  );
};

// Define PropTypes for type validation
Individual.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Individual;
