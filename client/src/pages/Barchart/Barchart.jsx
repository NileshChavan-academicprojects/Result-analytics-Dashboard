import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from "recharts";
import "./Barchart.scss"; // Import the SCSS file

const Barcharttool = () => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("basic");
  const chartRef = useRef(null);
  const [xKey, setXKey] = useState("");
  const [yKeys, setYKeys] = useState([]);

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

      if (jsonData.length > 1) {
        const headers = jsonData[0].map((header) => header.trim());
        const formattedData = jsonData.slice(1).map((row) => {
          let obj = {};
          headers.forEach((key, index) => {
            let value = row[index];
            obj[key] = isNaN(value) ? value : Number(value); // Convert to number if possible
          });
          return obj;
        });

        // Auto-detect X-axis key (first column) and numeric Y-axis keys
        const detectedXKey = headers[0];
        const numericKeys = headers.filter((h) =>
          formattedData.every((row) => !isNaN(row[h])) // Select only numeric columns
        );

        setXKey(detectedXKey);
        setYKeys(numericKeys.length > 0 ? numericKeys : [headers[1]]);
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

  return (
    <div className="barcharttool">
      <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} className="file-input" />
      <p className="upload-text">Upload Exam Results CSV/XLSX</p>

      <div className="controls">
        <select onChange={(e) => setChartType(e.target.value)} value={chartType} className="chart-select">
          <option value="basic">Basic Bar Chart</option>
          <option value="stacked">Stacked Bar Chart</option>
          <option value="grouped">Grouped Bar Chart</option>
          <option value="horizontal">Horizontal Bar Chart</option>
        </select>

        <button onClick={downloadCSV} className="btn">Download CSV</button>
        <button onClick={downloadGraph} className="btn">Download Graph</button>
      </div>

      {/* Render Chart */}
      <div ref={chartRef} className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout={chartType === "horizontal" ? "vertical" : "horizontal"}>
            <CartesianGrid strokeDasharray="3 3" />
            {chartType === "horizontal" ? (
              <>
                <XAxis type="number" />
                <YAxis dataKey={xKey} type="category" />
              </>
            ) : (
              <>
                <XAxis dataKey={xKey} type="category" />
                <YAxis type="number" />
              </>
            )}
            <Tooltip />
            <Legend />

            {/* Render Bars dynamically based on selected chart type */}
            {yKeys.map((key, index) => (
              <Bar
                key={index}
                dataKey={key}
                fill={`#${(Math.random() * 0xffffff << 0).toString(16)}`}
                stackId={chartType === "stacked" ? "a" : undefined}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barcharttool;