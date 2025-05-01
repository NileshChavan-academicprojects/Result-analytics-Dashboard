import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from "recharts";
import "./Piechart.scss";

const COLORS = ["#8884d8", "#82ca9d", "#ff7300", "#ff6384", "#36a2eb", "#ffce56"];

const Compresults = () => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("pie_basic");
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
        const headers = jsonData[0].map((header) => header.trim());
        const formattedData = jsonData.slice(1).map((row) => {
          let obj = {};
          headers.forEach((key, index) => {
            let value = row[index];
            obj[key] = isNaN(value) ? value : Number(value);
          });
          return obj;
        });

        const nameKey = headers.find(h => /name|student/i.test(h)) || headers[0];
        const dataKey = headers.find(h => /pointer|score|marks|value/i.test(h)) || headers[1];

        if (!nameKey || !dataKey) {
          console.warn("Could not detect appropriate columns for pie chart.");
          return;
        }

        console.log("Detected Keys -> Name:", nameKey, " Data:", dataKey);

        setData(formattedData.map(item => ({
          name: item[nameKey],
          value: item[dataKey]
        })));
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

    const headers = "Name,Value";
    const rows = data.map((row) => `${row.name},${row.value}`).join("\n");
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
        <select onChange={(e) => setChartType(e.target.value)} value={chartType} className="chart-select">
          <optgroup label="Pie Charts">
            <option value="pie_basic">Basic Pie Chart</option>
            <option value="pie_donut">Donut Chart</option>
            <option value="pie_half">Half Pie Chart</option>
          </optgroup>
        </select>

        <button onClick={downloadCSV} className="btn">Download CSV</button>
        <button onClick={downloadGraph} className="btn">Download Graph</button>
      </div>

      <div ref={chartRef} className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Tooltip />
            {chartType === "pie_basic" && (
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            )}
            {chartType === "pie_donut" && (
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={100} fill="#82ca9d">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            )}
            {chartType === "pie_half" && (
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" startAngle={180} endAngle={0} outerRadius={100} fill="#ff7300">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Compresults;