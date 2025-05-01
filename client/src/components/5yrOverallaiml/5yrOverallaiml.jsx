import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./5yrOverallaiml.scss";

// Sample Data for Table
const sampleData = [
  { name: "Computer", value: 180 },
  { name: "Semester", value: 6 },
  { name: "Subject", value: 30 },
  { name: "Topper", value: 9 },
];

const Individual = ({ title, color }) => {
  return (
    <div className="subject">
      <h1>{title}</h1>
      <p>Past 5 Years</p>

      {/* Table for Better Data Representation */}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
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
        <Link to="/Areachart" style={{ color }}>View all</Link>
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
