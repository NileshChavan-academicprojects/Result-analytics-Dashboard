import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import {
  Treemap, ResponsiveContainer, Tooltip
} from "recharts";
import "./Treemapchart.scss"; // Import the SCSS file

const Compresults = () => {
  const [data, setData] = useState([]);
  const [treemapType, setTreemapType] = useState("rect"); // Default to Rectangular Treemap
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

      if (jsonData.length > 1) {
        const headers = jsonData[0];
        const formattedData = jsonData.slice(1).map((row) => {
          let obj = {};
          headers.forEach((key, index) => {
            obj[key] = row[index] || 0; 
          });
          return obj;
        });

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
    <div className="compresults">
      <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} className="file-input" />
      <p className="upload-text">Upload Exam Results CSV/XLSX</p>

      <div className="controls">
        <select onChange={(e) => setTreemapType(e.target.value)} value={treemapType} className="chart-select">
          <option value="rect">Rectangular Treemap</option>
          <option value="circle">Circular Treemap</option>
        </select>

        <button onClick={downloadCSV} className="btn">Download CSV</button>
        <button onClick={downloadGraph} className="btn">Download Graph</button>
      </div>

      {/* Render Chart */}
      <div ref={chartRef} className="chart-container">
        <ResponsiveContainer width="100%" height={1000}>
          <Treemap
            data={data}
            dataKey="Pointers"
            stroke="#fff"
            fill="#82ca9d"
            aspectRatio={treemapType === "rect" ? 4 / 3 : 1}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Compresults;
