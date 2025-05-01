import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./5yrIndividual.scss";

// Sample Data for Table
const sampleData = [
  { name: "Swati M", value: 9.87 },
  { name: "Jesia F", value: 10.00 },
  { name: "Samidha C", value: 9.59 },
  { name: "Shankar K", value: 9.45 },
];

const Individual = ({ title, color }) => {
  return (
    <div className="individual">
      <h1>{title}</h1>
      <p>Past 5 Years</p>

      {/* Table for Better Data Representation */}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>SGPI</th>
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
