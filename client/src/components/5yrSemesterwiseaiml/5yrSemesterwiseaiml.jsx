import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./5yrSemesterwiseaiml.scss";

// Sample Data for Table
const sampleData = [
  { name: "Semester 1", value: 60 },
  { name: "Semester 3", value: 45 },
  { name: "Semester 5", value: 30 },
  { name: "Semester 7", value: 50 },
];

const Individual = ({ title, color }) => {
  return (
    <div className="semester">
      <h1>{title}</h1>
      <p>past 5 years</p>

      {/* Table for Better Data Representation */}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Semester</th>
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
        <Link to="/Compsemester" style={{ color }}>View all</Link>
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
