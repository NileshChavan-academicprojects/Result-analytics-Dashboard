import React, { useState } from "react";
import regression from "regression";
import * as XLSX from "xlsx";
import { kmeans } from "ml-kmeans";
import KNN from "ml-knn";
import { saveAs } from "file-saver";
import {
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Predictiontools.scss"; // Custom SCSS for styling

const RegressionModel = () => {
  const [chartData, setChartData] = useState([]);
  const [equation, setEquation] = useState("");
  const [inputData, setInputData] = useState("");
  const [modelType, setModelType] = useState("linear");
  const [futurePoints, setFuturePoints] = useState(5); // Number of future predictions

  const handleDataInputChange = (event) => setInputData(event.target.value);
  const handleFuturePointsChange = (event) => setFuturePoints(Number(event.target.value));

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

    const maxX = Math.max(...dataPoints.map(([x]) => x));
    const futureXValues = Array.from({ length: futurePoints }, (_, i) => maxX + i + 1);

    if (modelType === "linear") {
      const resultModel = regression.linear(dataPoints);
      predictedData = dataPoints.map(([x, y]) => ({
        x,
        actual: y,
        predicted: resultModel.predict(x)[1],
      }));

      const futurePredictions = futureXValues.map((x) => ({
        x,
        predicted: resultModel.predict(x)[1],
      }));

      predictedData = [...predictedData, ...futurePredictions];

      equationText = `${resultModel.equation[0].toFixed(2)}x + ${resultModel.equation[1].toFixed(2)}`;
    } else if (modelType === "logistic") {
      const resultModel = regression.logarithmic(dataPoints);
      predictedData = dataPoints.map(([x, y]) => ({
        x,
        actual: y,
        predicted: resultModel.predict(x)[1],
      }));

      const futurePredictions = futureXValues.map((x) => ({
        x,
        predicted: resultModel.predict(x)[1],
      }));

      predictedData = [...predictedData, ...futurePredictions];

      equationText = `a * ln(x) + b`;
    } else if (modelType === "clustering") {
      const numClusters = 3; // Adjust clusters
      const kmeansResult = kmeans(dataPoints, numClusters);

      predictedData = dataPoints.map(([x, y], index) => ({
        x,
        y,
        cluster: kmeansResult.clusters[index],
      }));

      equationText = `K-Means Clustering applied with ${numClusters} clusters`;
    } else if (modelType === "knn") {
      const k = 3; // Number of neighbors
      const X = dataPoints.map(([x]) => [x]);
      const Y = dataPoints.map(([, y]) => y);
      const knn = new KNN(X, Y, { k });

      predictedData = dataPoints.map(([x, y]) => ({
        x,
        actual: y,
        predicted: knn.predict([x]),
      }));

      const futurePredictions = futureXValues.map((x) => ({
        x,
        predicted: knn.predict([x]),
      }));

      predictedData = [...predictedData, ...futurePredictions];

      equationText = `KNN Regression applied with k=${k}`;
    }

    setChartData(predictedData);
    setEquation(equationText);
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
          <option value="clustering">K-Means Clustering</option>
          <option value="knn">K-Nearest Neighbors (KNN)</option>
        </select>
      </div>

      <div className="future-prediction">
        <label>Future Points: </label>
        <input
          type="number"
          value={futurePoints}
          onChange={handleFuturePointsChange}
          className="number-input"
        />
      </div>

      <button onClick={handleSubmit} className="submit-btn">Generate Model</button>

      {equation && <h3>Model Output: {equation}</h3>}

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#007bff" name="Actual" />
          <Line type="monotone" dataKey="predicted" stroke="#ff0000" name="Predicted" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegressionModel;
