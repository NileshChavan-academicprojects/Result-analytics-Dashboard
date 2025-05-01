import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import "./Linechart.scss";

const Compresults = () => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("monotone");
  const chartRef = useRef(null);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      if (!sheet) {
        console.error("No sheet found in the file.");
        return;
      }

      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.log("Raw JSON Data:", jsonData);

      if (jsonData.length > 1) {
        const headers = jsonData[0].map((header) => header.trim());
        const formattedData = jsonData.slice(1).map((row) => {
          let obj = {};
          headers.forEach((key, index) => {
            obj[key] = row[index] !== undefined ? row[index] : 0;
          });
          return obj;
        }).filter(row => Object.values(row).some(value => value !== 0));

        console.log("Formatted Data:", formattedData);
        setData(formattedData);
      } else {
        console.warn("No valid data found in the file.");
      }
    };

    reader.readAsBinaryString(file);
  };

  const downloadCSV = () => {
    if (data.length === 0) {
      alert("No data available for download!");
      return;
    }

    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((row) => Object.values(row).join(",")).join("\n");
    const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "exam_results.csv");
  };

  const downloadGraph = async () => {
    if (!chartRef.current) return;

    const canvas = await html2canvas(chartRef.current);
    canvas.toBlob((blob) => {
      saveAs(blob, "exam_results_graph.png");
    });
  };

  const xAxisKey = data.length > 0 ? Object.keys(data[0])[0] : "";
  const yAxisKey = data.length > 0 ? Object.keys(data[0])[1] : "";

  return (
    <div className="compresults">
      <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} className="file-input" />
      <p className="upload-text">Upload Exam Results CSV/XLSX</p>

      <div className="controls">
        <select onChange={(e) => setChartType(e.target.value)} value={chartType} className="chart-select">
          <option value="monotone">Monotone Line Chart</option>
          <option value="step">Step Line Chart</option>
          <option value="bump">Bump Line Chart</option>
          <option value="dashed">Dashed Line Chart</option>
        </select>

        <button onClick={downloadCSV} className="btn">Download CSV</button>
        <button onClick={downloadGraph} className="btn">Download Graph</button>
      </div>

      <div ref={chartRef} className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {chartType === "monotone" && <Line type="monotone" dataKey={yAxisKey} stroke="#8884d8" strokeWidth={2} />}
            {chartType === "step" && <Line type="step" dataKey={yAxisKey} stroke="#82ca9d" strokeWidth={2} />}
            {chartType === "bump" && <Line type="basis" dataKey={yAxisKey} stroke="#ff7300" strokeWidth={2} />}
            {chartType === "dashed" && <Line type="monotone" dataKey={yAxisKey} stroke="#8884d8" strokeDasharray="5 5" strokeWidth={2} />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Compresults;