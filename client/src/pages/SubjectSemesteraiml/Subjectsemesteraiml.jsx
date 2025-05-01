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
import "./Subjectsemesteraiml.scss"; // Custom SCSS for styling

const semesterData = {
  semester3: [
    { name: "EM 3", score: 85 },
    { name: "DSGT", score: 73 },
    { name: "DS", score: 98 },
    { name: "DLCA", score: 94 },
    { name: "CG", score: 94 },
  ],
  semester4: [
    { name: "EM 4", score: 74 },
    { name: "AOA", score: 90 },
    { name: "DBMS", score: 93 },
    { name: "OS", score: 88 },
    { name: "MP", score: 85 },
  ],
  semester5: [
    { name: "CN", score: 50 },
    { name: "DWM", score: 80 },
    { name: "AI", score: 40 },
    { name: "IoT", score: 60 },
    { name: "WC", score: 70 },
  ],
  semester6: [
    { name: "DAV", score: 50 },
    { name: "CSS", score: 80 },
    { name: "SEPM", score: 60 },
    { name: "ML", score: 50 },
    { name: "DC", score: 90 },
  ],
  semester7: [
    { name: "DL", score: 74 },
    { name: "BDA", score: 90 },
    { name: "BLC", score: 93 },
    { name: "NLP", score: 88 },
    { name: "DMMM", score: 85 },
  ],
  semester8: [
    { name: "AAI", score: 74 },
    { name: "RIL", score: 90 },
    { name: "SMA", score: 93 },
    { name: "EVM", score: 88 },
  ],
};

const pastYearsData = {
  "EM 3": [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DSGT: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DS: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DLCA: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  CG: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  "EM 4": [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  AOA: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DBMS: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  OS: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  MP: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  CN: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DWM: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  AI: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  IoT: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  WC: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DAV: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  CSS: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  SEPM: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  ML: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DC: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DL: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  BDA: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  BLC: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  NLP: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  DMMM: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  AAI: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  RIL: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  SMA: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  EVM: [
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
};

const SemesterBarChart = () => {
  const [selectedSemester, setSelectedSemester] = useState("semester3");
  const [chartData, setChartData] = useState(semesterData.semester3);
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSemesterChange = (event) => {
    const selectedData = semesterData[event.target.value] || [];
    setChartData(selectedData);
    setSelectedSemester(event.target.value);
    setSelectedSubject("");
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div className="container12">
      {/* Semester Selection */}
      <div className="model-selector">
        <label>Select Semester: </label>
        <select value={selectedSemester} onChange={handleSemesterChange} className="select-input">
          {Object.keys(semesterData).map((semester) => (
            <option key={semester} value={semester}>
              {semester.replace("semester", "Semester ")}
            </option>
          ))}
        </select>
      </div>

      {/* Subject Selection */}
      <div className="model-selector">
        <label>Select Subject: </label>
        <select value={selectedSubject} onChange={handleSubjectChange} className="select-input">
          <option value="">All Subjects</option>
          {chartData.map((subject) => (
            <option key={subject.name} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      {/* Bar Chart for Selected Semester */}
      <h3>{selectedSemester.replace("semester", "Semester ")} Performance</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* Bar Chart for Selected Subject Past Years */}
      {selectedSubject && pastYearsData[selectedSubject] && (
        <>
          <h3>{selectedSubject}</h3>
          <h4>This data is generated for visualization purposes only and does not represent real results.</h4>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={pastYearsData[selectedSubject]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default SemesterBarChart;
