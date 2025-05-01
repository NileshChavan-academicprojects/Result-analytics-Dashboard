import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Individual.scss";

// Sample Data for Table
const sampleData = [
  { name: "Raj", value: 3 },
  { name: "Rahul", value: 4 },
  { name: "Rakesh", value: 5 },
  { name: "Rohan", value: 6 },
];

const Individual = ({ title, color }) => {
  return (
    <div className="subject">
      <h1>Individual</h1>

      {/* Table for Better Data Representation */}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Semester</th>
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
        <Link to="/Indvidual" style={{ color }}>View all</Link>
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
