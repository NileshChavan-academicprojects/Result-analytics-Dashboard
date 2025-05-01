import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { KNN } from 'ml-knn';
import "./Knnmodel.scss"; // Custom SCSS for styling

const RegressionModel = () => {
  const [chartData, setChartData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [modelType, setModelType] = useState("knn");

  const handleDataInputChange = (event) => setInputData(event.target.value);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      const csvData = jsonData.map((row) => row.join(",")).join("\n");
      setInputData(csvData);
    };

    reader.readAsBinaryString(file);
  };

  const handleSubmit = () => {
    const rows = inputData.split("\n").map((row) => row.split(","));
    const dataPoints = rows
      .map(([x, y]) => [parseFloat(x), y.trim()])
      .filter(([x, y]) => !isNaN(x) && y);

    if (dataPoints.length < 2) {
      alert("Please enter at least two valid data points.");
      return;
    }

    const X = dataPoints.map(([x]) => [x]);
    const Y = dataPoints.map(([_, y]) => y);

    const knn = new KNN(X, Y, { k: 3 });

    const predictedData = dataPoints.map(([x, actual]) => ({
      x,
      actual,
      predicted: knn.predict([x])
    }));

    setChartData(predictedData);
  };

  const downloadCSV = () => {
    if (chartData.length === 0) {
      alert("No data available for download!");
      return;
    }

    const headers = "x,actual,predicted";
    const rows = chartData.map((row) => `${row.x},${row.actual},${row.predicted}`).join("\n");
    const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "knn_grade_predictions.csv");
  };

  return (
    <div className="container121">
      <textarea
        placeholder="Enter data (x, grade) separated by a new line, e.g., 45, B\n60, A\n32, D"
        value={inputData}
        onChange={handleDataInputChange}
        rows={6}
        className="textarea-input"
      />

      <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} className="file-input" />

      <button onClick={handleSubmit} className="submit-btn">Generate KNN Model</button>
      <button onClick={downloadCSV} className="download-btn">Download Results</button>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#007bff" name="Actual Grade" />
          <Line type="monotone" dataKey="predicted" stroke="#ff0000" name="Predicted Grade" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegressionModel;
