import React, { useState, useEffect } from "react";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import * as XLSX from "xlsx";

import "./Aimlresults.scss";

const Aimlresults = () => {
  const [data, setData] = useState([]);

  // Load saved data from localStorage on page load
  useEffect(() => {
    const savedData = localStorage.getItem("aimlResults");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      if (!sheet) {
        console.error("No sheet found in the Excel file.");
        return;
      }

      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      console.log("Extracted Data:", jsonData);

      if (jsonData.length > 0) {
        const headers = jsonData[0];
        console.log("Headers from Excel:", headers);

        const formattedData = jsonData.slice(1).map((row) =>
          headers.map((_, index) => row[index] || "")
        );

        console.log("Final Data for Grid.js:", formattedData);
        setData(formattedData);

        // Save to localStorage
        localStorage.setItem("aimlResults", JSON.stringify(formattedData));
      } else {
        console.warn("No valid data found in the file.");
      }
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="table">
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      <p>Semester 7 Result</p>
      <div className="tableContainer">
        <Grid
          data={data}
          columns={[
            "Seat NO.",
            "Students Name",
            "Paper 1",
            "Paper 2",
            "Paper 3",
            "Paper 4",
            "Paper 5",
            "SGPI Pointers",
            "Grade",
          ]}
          search={true}
          pagination={{ limit: 17 }}
          sort={true}
        />
      </div>
    </div>
  );
};

export default Aimlresults;
