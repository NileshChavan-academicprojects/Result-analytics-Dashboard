import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from "recharts";
import "./Areachart.scss"; // Import SCSS file

const Areacharttool = () => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("area_basic");
  const chartRef = useRef(null);
  const [xKey, setXKey] = useState("");
  const [yKeys, setYKeys] = useState([]); // Store multiple numeric keys

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
            obj[key] = row[index] !== undefined ? row[index] : 0;
          });
          return obj;
        }).filter(row => Object.values(row).some(value => value !== 0));

        if (formattedData.length > 0) {
          const detectedXKey = headers[0]; // Assume first column is X-axis
          const numericKeys = headers.filter((h) => 
            formattedData.every((row) => !isNaN(row[h])) // Select all numeric columns
          );

          setXKey(detectedXKey);
          setYKeys(numericKeys.length > 0 ? numericKeys : [headers[1]]);
        }

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
          <optgroup label="Area Charts">
            <option value="area_basic">Basic Area Chart</option>
            <option value="area_stacked">Stacked Area Chart</option>
            <option value="area_smooth">Smooth Curve Area Chart</option>
          </optgroup>
        </select>

        <button onClick={downloadCSV} className="btn">Download CSV</button>
        <button onClick={downloadGraph} className="btn">Download Graph</button>
      </div>

      {/* Render Chart */}
      <div ref={chartRef} className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {chartType === "area_basic" && (
              <Area type="monotone" dataKey={yKeys[0]} fill="#8884d8" stroke="#8884d8" />
            )}
            {chartType === "area_stacked" &&
              yKeys.map((key, index) => (
                <Area key={index} type="monotone" dataKey={key} stackId="1" fill={`#${(Math.random()*0xFFFFFF<<0).toString(16)}`} stroke="#000" />
              ))
            }
            {chartType === "area_smooth" &&
              yKeys.map((key, index) => (
                <Area key={index} type="natural" dataKey={key} fill="#82ca9d" stroke="#82ca9d" />
              ))
            }
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Areacharttool;
