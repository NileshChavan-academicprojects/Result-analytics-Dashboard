import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./gradedistribution.scss"; // Custom SCSS for styling

const gradeDistributionData = {
  semester3: {
    2019: [
      { range: "6.0 - 7.0", students: 8 },
      { range: "7.0 - 8.0", students: 18 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 10 },
    ],
    2020: [
      { range: "6.0 - 7.0", students: 10 },
      { range: "7.0 - 8.0", students: 20 },
      { range: "8.0 - 9.0", students: 11 },
      { range: "9.0 - 10.0", students: 12 },
    ],
    2021: [
      { range: "6.0 - 7.0", students: 12 },
      { range: "7.0 - 8.0", students: 22 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 9 },
    ],
    2022: [
      { range: "6.0 - 7.0", students: 11 },
      { range: "7.0 - 8.0", students: 19 },
      { range: "8.0 - 9.0", students: 16 },
      { range: "9.0 - 10.0", students: 13 },
    ],
    2023: [
      { range: "6.0 - 7.0", students: 14 },
      { range: "7.0 - 8.0", students: 24 },
      { range: "8.0 - 9.0", students: 17 },
      { range: "9.0 - 10.0", students: 11 },
    ],
    2024: [
      { range: "6.0 - 7.0", students: 15 },
      { range: "7.0 - 8.0", students: 21 },
      { range: "8.0 - 9.0", students: 18 },
      { range: "9.0 - 10.0", students: 14 },
    ],
  },

  semester4: {
    2019: [
      { range: "6.0 - 7.0", students: 8 },
      { range: "7.0 - 8.0", students: 18 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 10 },
    ],
    2020: [
      { range: "6.0 - 7.0", students: 10 },
      { range: "7.0 - 8.0", students: 20 },
      { range: "8.0 - 9.0", students: 11 },
      { range: "9.0 - 10.0", students: 12 },
    ],
    2021: [
      { range: "6.0 - 7.0", students: 12 },
      { range: "7.0 - 8.0", students: 22 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 9 },
    ],
    2022: [
      { range: "6.0 - 7.0", students: 11 },
      { range: "7.0 - 8.0", students: 19 },
      { range: "8.0 - 9.0", students: 16 },
      { range: "9.0 - 10.0", students: 13 },
    ],
    2023: [
      { range: "6.0 - 7.0", students: 14 },
      { range: "7.0 - 8.0", students: 24 },
      { range: "8.0 - 9.0", students: 17 },
      { range: "9.0 - 10.0", students: 11 },
    ],
    2024: [
      { range: "6.0 - 7.0", students: 15 },
      { range: "7.0 - 8.0", students: 21 },
      { range: "8.0 - 9.0", students: 18 },
      { range: "9.0 - 10.0", students: 14 },
    ],
  },

  semester5: {
    2019: [
      { range: "6.0 - 7.0", students: 8 },
      { range: "7.0 - 8.0", students: 18 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 10 },
    ],
    2020: [
      { range: "6.0 - 7.0", students: 10 },
      { range: "7.0 - 8.0", students: 20 },
      { range: "8.0 - 9.0", students: 11 },
      { range: "9.0 - 10.0", students: 12 },
    ],
    2021: [
      { range: "6.0 - 7.0", students: 12 },
      { range: "7.0 - 8.0", students: 22 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 9 },
    ],
    2022: [
      { range: "6.0 - 7.0", students: 11 },
      { range: "7.0 - 8.0", students: 19 },
      { range: "8.0 - 9.0", students: 16 },
      { range: "9.0 - 10.0", students: 13 },
    ],
    2023: [
      { range: "6.0 - 7.0", students: 14 },
      { range: "7.0 - 8.0", students: 24 },
      { range: "8.0 - 9.0", students: 17 },
      { range: "9.0 - 10.0", students: 11 },
    ],
    2024: [
      { range: "6.0 - 7.0", students: 15 },
      { range: "7.0 - 8.0", students: 21 },
      { range: "8.0 - 9.0", students: 18 },
      { range: "9.0 - 10.0", students: 14 },
    ],
  },

  semester6: {
    2019: [
      { range: "6.0 - 7.0", students: 8 },
      { range: "7.0 - 8.0", students: 18 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 10 },
    ],
    2020: [
      { range: "6.0 - 7.0", students: 10 },
      { range: "7.0 - 8.0", students: 20 },
      { range: "8.0 - 9.0", students: 11 },
      { range: "9.0 - 10.0", students: 12 },
    ],
    2021: [
      { range: "6.0 - 7.0", students: 12 },
      { range: "7.0 - 8.0", students: 22 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 9 },
    ],
    2022: [
      { range: "6.0 - 7.0", students: 11 },
      { range: "7.0 - 8.0", students: 19 },
      { range: "8.0 - 9.0", students: 16 },
      { range: "9.0 - 10.0", students: 13 },
    ],
    2023: [
      { range: "6.0 - 7.0", students: 14 },
      { range: "7.0 - 8.0", students: 24 },
      { range: "8.0 - 9.0", students: 17 },
      { range: "9.0 - 10.0", students: 11 },
    ],
    2024: [
      { range: "6.0 - 7.0", students: 15 },
      { range: "7.0 - 8.0", students: 21 },
      { range: "8.0 - 9.0", students: 18 },
      { range: "9.0 - 10.0", students: 14 },
    ],
  },

  semester7: {
    2019: [
      { range: "6.0 - 7.0", students: 8 },
      { range: "7.0 - 8.0", students: 18 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 10 },
    ],
    2020: [
      { range: "6.0 - 7.0", students: 10 },
      { range: "7.0 - 8.0", students: 20 },
      { range: "8.0 - 9.0", students: 11 },
      { range: "9.0 - 10.0", students: 12 },
    ],
    2021: [
      { range: "6.0 - 7.0", students: 12 },
      { range: "7.0 - 8.0", students: 22 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 9 },
    ],
    2022: [
      { range: "6.0 - 7.0", students: 11 },
      { range: "7.0 - 8.0", students: 19 },
      { range: "8.0 - 9.0", students: 16 },
      { range: "9.0 - 10.0", students: 13 },
    ],
    2023: [
      { range: "6.0 - 7.0", students: 14 },
      { range: "7.0 - 8.0", students: 24 },
      { range: "8.0 - 9.0", students: 17 },
      { range: "9.0 - 10.0", students: 11 },
    ],
    2024: [
      { range: "6.0 - 7.0", students: 15 },
      { range: "7.0 - 8.0", students: 21 },
      { range: "8.0 - 9.0", students: 18 },
      { range: "9.0 - 10.0", students: 14 },
    ],
  },

  semester8: {
    2019: [
      { range: "6.0 - 7.0", students: 8 },
      { range: "7.0 - 8.0", students: 18 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 10 },
    ],
    2020: [
      { range: "6.0 - 7.0", students: 10 },
      { range: "7.0 - 8.0", students: 20 },
      { range: "8.0 - 9.0", students: 11 },
      { range: "9.0 - 10.0", students: 12 },
    ],
    2021: [
      { range: "6.0 - 7.0", students: 12 },
      { range: "7.0 - 8.0", students: 22 },
      { range: "8.0 - 9.0", students: 14 },
      { range: "9.0 - 10.0", students: 9 },
    ],
    2022: [
      { range: "6.0 - 7.0", students: 11 },
      { range: "7.0 - 8.0", students: 19 },
      { range: "8.0 - 9.0", students: 16 },
      { range: "9.0 - 10.0", students: 13 },
    ],
    2023: [
      { range: "6.0 - 7.0", students: 14 },
      { range: "7.0 - 8.0", students: 24 },
      { range: "8.0 - 9.0", students: 17 },
      { range: "9.0 - 10.0", students: 11 },
    ],
    2024: [
      { range: "6.0 - 7.0", students: 15 },
      { range: "7.0 - 8.0", students: 21 },
      { range: "8.0 - 9.0", students: 18 },
      { range: "9.0 - 10.0", students: 14 },
    ],
  },
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SemesterGradeChart = () => {
  const [selectedSemester, setSelectedSemester] = useState("semester3");
  const [selectedYear, setSelectedYear] = useState(2024);

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };

  return (
    <div className="container12">
      <div className="selectors">
        <div className="model-selector">
          <label>Select Semester: </label>
          <select value={selectedSemester} onChange={handleSemesterChange} className="select-input">
            {Object.keys(gradeDistributionData).map((semester) => (
              <option key={semester} value={semester}>
                {semester.replace("semester", "Semester ")}
              </option>
            ))}
          </select>
        </div>

        <div className="year-selector">
          <label>Select Year: </label>
          <select value={selectedYear} onChange={handleYearChange} className="select-input">
            {[2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h3>
        {selectedSemester.replace("semester", "Semester ")} Grade Distribution ({selectedYear})
      </h3>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={gradeDistributionData[selectedSemester][selectedYear]}
            cx="50%"
            cy="50%"
            label={({ range, students }) => `${range}: ${students}`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="students"
            nameKey="range"
          >
            {gradeDistributionData[selectedSemester][selectedYear].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} students`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SemesterGradeChart;
