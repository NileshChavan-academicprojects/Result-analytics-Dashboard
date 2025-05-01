import React, { useState } from "react";
import regression from "regression";
import * as XLSX from "xlsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { saveAs } from "file-saver";
import "./Predictiontools.scss"; // Custom SCSS for styling

const RegressionModel = () => {
  const [chartData, setChartData] = useState([]);
  const [equation, setEquation] = useState("");
  const [inputData, setInputData] = useState("");
  const [modelType, setModelType] = useState("linear");

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
      .map(([x, y]) => [parseFloat(x), parseFloat(y)])
      .filter(([x, y]) => !isNaN(x) && !isNaN(y));

    if (dataPoints.length < 2) {
      alert("Please enter at least two valid data points.");
      return;
    }

    let predictedData = [];
    let equationText = "";

    if (modelType === "linear") {
      const resultModel = regression.linear(dataPoints);
      predictedData = dataPoints.map(([x, y]) => ({
        x,
        actual: y,
        predicted: resultModel.predict(x)[1],
      }));
      equationText = `${resultModel.equation[0].toFixed(2)}x + ${resultModel.equation[1].toFixed(2)}`;
    } else if (modelType === "logistic") {
      const resultModel = regression.logarithmic(dataPoints);
      predictedData = dataPoints.map(([x, y]) => ({
        x,
        actual: y,
        predicted: resultModel.predict(x)[1],
      }));
      equationText = `a * ln(x) + b`;
    }

    setChartData(predictedData);
    setEquation(equationText);
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
    saveAs(blob, "predicted_results.csv");
  };

  return (
    <div className="container12">
      <textarea
        placeholder="Enter data (x, y pairs) separated by a new line, e.g., 1, 5\n2, 10\n3, 15"
        value={inputData}
        onChange={handleDataInputChange}
        rows={6}
        className="textarea-input"
      />

      <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} className="file-input" />

      <div className="model-selector">
        <label>Select Model: </label>
        <select value={modelType} onChange={(e) => setModelType(e.target.value)} className="select-input">
          <option value="linear">Linear Regression</option>
          <option value="logistic">Logistic Regression</option>
        </select>
      </div>

      <button onClick={handleSubmit} className="submit-btn">Generate Regression</button>
      <button onClick={downloadCSV} className="download-btn">Download Results</button>

      {equation && <h3>Regression Equation: {equation}</h3>}

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#007bff" name="Actual" />
          <Line type="monotone" dataKey="predicted" stroke="#ff0000" name="Predicted" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegressionModel;