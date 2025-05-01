import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Compare.scss"; // Custom SCSS for styling

// Sample Data for Department Comparison
const departmentData = {
  CSE_AI_ML: [
    { subject: "Semester 1", score: 80 },
    { subject: "Semester 2", score: 85 },
    { subject: "Semester 3", score: 90 },
    { subject: "Semester 4", score: 88 },
  ],
  Computer: [
    { subject: "Semester 1", score: 88 },
    { subject: "Semester 2", score: 82 },
    { subject: "Semester 3", score: 85 },
    { subject: "Semester 4", score: 87 },
  ],
};

const DepartmentComparisonChart = () => {
  const [firstDepartment, setFirstDepartment] = useState("CSE_AI_ML");
  const [secondDepartment, setSecondDepartment] = useState("Computer");

  const firstData = departmentData[firstDepartment] || [];
  const secondData = departmentData[secondDepartment] || [];

  // Merge data based on unique subjects
  const subjectSet = new Set([
    ...firstData.map((s) => s.subject),
    ...secondData.map((s) => s.subject),
  ]);

  const mergedData = Array.from(subjectSet).map((subject) => {
    const firstScore = firstData.find((item) => item.subject === subject)?.score || 0;
    const secondScore = secondData.find((item) => item.subject === subject)?.score || 0;
    return { subject, [firstDepartment]: firstScore, [secondDepartment]: secondScore };
  });

  return (
    <div className="container12">
      <h2>Department Comparison</h2>

      <div className="selectors">
        <label>Select First Department: </label>
        <select value={firstDepartment} onChange={(e) => setFirstDepartment(e.target.value)}>
          {Object.keys(departmentData).map((dept) => (
            <option key={dept} value={dept}>{dept.replace("_", " ")}</option>
          ))}
        </select>

        <label>Select Second Department: </label>
        <select value={secondDepartment} onChange={(e) => setSecondDepartment(e.target.value)}>
          {Object.keys(departmentData).map((dept) => (
            <option key={dept} value={dept}>{dept.replace("_", " ")}</option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={mergedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={firstDepartment} fill="#8884d8" name={firstDepartment.replace("_", " ")} />
          <Bar dataKey={secondDepartment} fill="#82ca9d" name={secondDepartment.replace("_", " ")} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentComparisonChart;