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
  LineChart,
  Line,
} from "recharts";
import "./compsemester.scss"; // Custom SCSS for styling

// Sample Semester Data
const semesterData = {
  semester3: [
    { name: "EM 3", score: 63 },
    { name: "DSGT", score: 73 },
    { name: "DS", score: 98 },
    { name: "DLCA", score: 94 },
    { name: "CG", score: 94 },
  ],
  semester4: [
    { name: "EM 4", score: 74 },
    { name: "AOA", score: 90 },
    { name: "BDMS", score: 93 },
    { name: "OS", score: 88 },
    { name: "MP", score: 85 },
  ],
  semester5: [
    { name: "TCS", score: 50 },
    { name: "DWM", score: 80 },
    { name: "CN", score: 40 },
    { name: "SE", score: 60 },
    { name: "IP", score: 70 },
  ],
  semester6: [
    { name: "SPCC", score: 50 },
    { name: "CSS", score: 80 },
    { name: "MC", score: 60 },
    { name: "AI", score: 50 },
    { name: "IoT", score: 90 },
  ],
  semester7: [
    { name: "ML", score: 50 },
    { name: "BDA", score: 80 },
    { name: "NLP", score: 120 },
    { name: "IR", score: 160 },
    { name: "DMMM", score: 160 },
  ],
  semester8: [
    { name: "DL", score: 50 },
    { name: "DC", score: 80 },
    { name: "SMA", score: 120 },
    { name: "EM", score: 160 },
  ],
};

// Past 3 Years Semester Performance Data
const pastYearsSemesterData = {
  semester3: [
    { year: "1999", score: 70 },
    { year: "2000", score: 75 },
    { year: "2001", score: 80 },
    { year: "2002", score: 70 },
    { year: "2003", score: 75 },
    { year: "2004", score: 80 },
    { year: "2005", score: 70 },
    { year: "2006", score: 75 },
    { year: "2007", score: 80 },
    { year: "2008", score: 70 },
    { year: "2009", score: 75 },
    { year: "2010", score: 80 },
    { year: "2011", score: 70 },
    { year: "2012", score: 75 },
    { year: "2013", score: 80 },
    { year: "2014", score: 70 },
    { year: "2015", score: 75 },
    { year: "2016", score: 80 },
    { year: "2017", score: 70 },
    { year: "2018", score: 75 },
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  semester4: [
    { year: "1999", score: 70 },
    { year: "2000", score: 75 },
    { year: "2001", score: 80 },
    { year: "2002", score: 70 },
    { year: "2003", score: 75 },
    { year: "2004", score: 80 },
    { year: "2005", score: 70 },
    { year: "2006", score: 75 },
    { year: "2007", score: 80 },
    { year: "2008", score: 70 },
    { year: "2009", score: 75 },
    { year: "2010", score: 80 },
    { year: "2011", score: 70 },
    { year: "2012", score: 75 },
    { year: "2013", score: 80 },
    { year: "2014", score: 70 },
    { year: "2015", score: 75 },
    { year: "2016", score: 80 },
    { year: "2017", score: 70 },
    { year: "2018", score: 75 },
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  semester5: [
    { year: "1999", score: 70 },
    { year: "2000", score: 75 },
    { year: "2001", score: 80 },
    { year: "2002", score: 70 },
    { year: "2003", score: 75 },
    { year: "2004", score: 80 },
    { year: "2005", score: 70 },
    { year: "2006", score: 75 },
    { year: "2007", score: 80 },
    { year: "2008", score: 70 },
    { year: "2009", score: 75 },
    { year: "2010", score: 80 },
    { year: "2011", score: 70 },
    { year: "2012", score: 75 },
    { year: "2013", score: 80 },
    { year: "2014", score: 70 },
    { year: "2015", score: 75 },
    { year: "2016", score: 80 },
    { year: "2017", score: 70 },
    { year: "2018", score: 75 },
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  semester6: [
    { year: "1999", score: 70 },
    { year: "2000", score: 75 },
    { year: "2001", score: 80 },
    { year: "2002", score: 70 },
    { year: "2003", score: 75 },
    { year: "2004", score: 80 },
    { year: "2005", score: 70 },
    { year: "2006", score: 75 },
    { year: "2007", score: 80 },
    { year: "2008", score: 70 },
    { year: "2009", score: 75 },
    { year: "2010", score: 80 },
    { year: "2011", score: 70 },
    { year: "2012", score: 75 },
    { year: "2013", score: 80 },
    { year: "2014", score: 70 },
    { year: "2015", score: 75 },
    { year: "2016", score: 80 },
    { year: "2017", score: 70 },
    { year: "2018", score: 75 },
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  semester7: [
    { year: "1999", score: 70 },
    { year: "2000", score: 75 },
    { year: "2001", score: 80 },
    { year: "2002", score: 70 },
    { year: "2003", score: 75 },
    { year: "2004", score: 80 },
    { year: "2005", score: 70 },
    { year: "2006", score: 75 },
    { year: "2007", score: 80 },
    { year: "2008", score: 70 },
    { year: "2009", score: 75 },
    { year: "2010", score: 80 },
    { year: "2011", score: 70 },
    { year: "2012", score: 75 },
    { year: "2013", score: 80 },
    { year: "2014", score: 70 },
    { year: "2015", score: 75 },
    { year: "2016", score: 80 },
    { year: "2017", score: 70 },
    { year: "2018", score: 75 },
    { year: "2019", score: 80 },
    { year: "2020", score: 70 },
    { year: "2021", score: 75 },
    { year: "2022", score: 80 },
    { year: "2023", score: 70 },
    { year: "2024", score: 75 },
  ],
  semester8: [
    { year: "1999", score: 70 },
    { year: "2000", score: 75 },
    { year: "2001", score: 80 },
    { year: "2002", score: 70 },
    { year: "2003", score: 75 },
    { year: "2004", score: 80 },
    { year: "2005", score: 70 },
    { year: "2006", score: 75 },
    { year: "2007", score: 80 },
    { year: "2008", score: 70 },
    { year: "2009", score: 75 },
    { year: "2010", score: 80 },
    { year: "2011", score: 70 },
    { year: "2012", score: 75 },
    { year: "2013", score: 80 },
    { year: "2014", score: 70 },
    { year: "2015", score: 75 },
    { year: "2016", score: 80 },
    { year: "2017", score: 70 },
    { year: "2018", score: 75 },
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

  const handleSemesterChange = (event) => {
    const selectedData = semesterData[event.target.value] || [];
    setChartData(selectedData);
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="container12">
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

      {/* Past 3 Years Semester Performance Bar Chart */}
      {pastYearsSemesterData[selectedSemester] && (
        <>
          <h3>Past Years {selectedSemester.replace("semester", "Semester ")} Performance</h3>
          <ResponsiveContainer width="90%" height={400}>
            <BarChart data={pastYearsSemesterData[selectedSemester]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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