import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Individual.scss"; // Custom SCSS for styling

// Sample Student Progress Data
const studentProgressData = [

  {
    name: "Adekar Jitesh Ramakant",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6.98 },
      { semester: 4, sgpa: 7.02 },
    ],
  },
  {
    name: "Adekar Jitesh Ramakant",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6.98 },
      { semester: 4, sgpa: 7.02 },
      { semester: 5, sgpa: 7.89 },
      { semester: 6, sgpa: 8.54 },
    ],
  },
  {
    name: "Adekar Jitesh Ramakant",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6.98 },
      { semester: 4, sgpa: 7.02 },
      { semester: 5, sgpa: 7.89 },
      { semester: 6, sgpa: 8.54 },
      { semester: 7, sgpa: 9.2 },
    ],
  },
  
  {
    name: "Bagade Shravani Sanjay",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Bagade Shravani Sanjay",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Bagade Shravani Sanjay",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },

  {
    name: "Ballal Amrapali Rajendrakumar",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Ballal Amrapali Rajendrakumar",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Ballal Amrapali Rajendrakumar",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },

  {
    name: "Band Sagar Satyavan",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Band Sagar Satyavan",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Band Sagar Satyavan",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },
  {
    name: "Bille Indragopal Ishwara",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Bille Indragopal Ishwara",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Bille Indragopal Ishwara",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },
  {
    name: "Bute Sumit Shikrushna",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Bute Sumit Shikrushna",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Bute Sumit Shikrushna",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },
  {
    name: "Chavan Nilesh Vasant",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Chavan Nilesh Vasant",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Chavan Nilesh Vasant",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },
  {
    name: "Chavan Sahil Ravikant",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Chavan Sahil Ravikant",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Chavan Sahil Ravikant",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },
  {
    name: "Chougale Samidha Sandip",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Chougale Samidha Sandip",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Chougale Samidha Sandip",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },
  {
    name: "Desai Pravin Pandurang",
    enggYear: "SE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
    ],
  },
  {
    name: "Desai Pravin Pandurang",
    enggYear: "TE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8.2 },
      { semester: 6, sgpa: 9.1 },
    ],
  },
  {
    name: "Desai Pravin Pandurang",
    enggYear: "BE",
    results: [
      { semester: 3, sgpa: 6 },
      { semester: 4, sgpa: 7 },
      { semester: 5, sgpa: 8 },
      { semester: 6, sgpa: 9 },
      { semester: 7, sgpa: 9.2 },
    ],
  },

  
];

const StudentProgressChart = () => {
  const [selectedStudent, setSelectedStudent] = useState(studentProgressData[0].name);
  const [selectedEnggYear, setSelectedEnggYear] = useState(studentProgressData[0].enggYear);
  const [chartData, setChartData] = useState(
    studentProgressData.find((s) => s.name === selectedStudent && s.enggYear === selectedEnggYear)
      ?.results || []
  );

  // Handle Student Selection
  const handleStudentChange = (event) => {
    const studentName = event.target.value;
    setSelectedStudent(studentName);
    updateChartData(studentName, selectedEnggYear);
  };

  // Handle Engineering Year Selection
  const handleEnggYearChange = (event) => {
    const enggYear = event.target.value;
    setSelectedEnggYear(enggYear);
    updateChartData(selectedStudent, enggYear);
  };

  // Function to Update Chart Data
  const updateChartData = (student, enggYear) => {
    const filteredData = studentProgressData.find(
      (s) => s.name === student && s.enggYear === enggYear
    );
    setChartData(filteredData ? filteredData.results : []);
  };

  return (
    <div className="container12">
      {/* Student Selection */}
      <div className="model-selector">
        <label>Select Student: </label>
        <select value={selectedStudent} onChange={handleStudentChange} className="select-input">
          {[...new Set(studentProgressData.map((s) => s.name))].map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Engineering Year Selection */}
      <div className="model-selector">
        <label>Select Engineering Year: </label>
        <select value={selectedEnggYear} onChange={handleEnggYearChange} className="select-input">
          {[...new Set(studentProgressData.map((s) => s.enggYear))].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Student Progress Chart */}
      <h3>{selectedStudent} - {selectedEnggYear} Semester-wise SGPA Progress</h3>
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="semester" tickFormatter={(tick) => `Sem ${tick}`} />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="sgpa" stroke="#82ca9d" strokeWidth={3} />
</LineChart>

      </ResponsiveContainer>
    </div>
  );
};

export default StudentProgressChart; 