import React, { useState } from "react";
import "./Latestresult.scss"; // Custom SCSS for styling

// Google Drive PDF URLs (Updated to embed properly)
const pdfUrls = {
  semester3: "https://drive.google.com/file/d/1ZYvV1w8qfoTJSrSum39W8a7wLMAm38Wa/preview",
  semester4: "https://drive.google.com/file/d/1qbOzUdqgdaWQa84qpfWcWzLhZVt1CzAR/preview",
  semester5: "https://drive.google.com/file/d/1O-UB1bX-NxFQQIwANasdngFlM4g6xZ7A/preview", // FIXED
  semester6: "https://drive.google.com/file/d/1f4CPPb6QGLHle89hsosKRW7opjKCjwCi/preview", // FIXED
  semester7: "https://drive.google.com/file/d/ACTUAL_FILE_ID_7/preview",
  semester8: "https://drive.google.com/file/d/ACTUAL_FILE_ID_8/preview",
};

const SemesterPDFViewer = () => {
  const [selectedSemester, setSelectedSemester] = useState("semester3");
  const [pdfUrl, setPdfUrl] = useState(pdfUrls.semester3); // Default to Semester 3

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleShowResult = () => {
    setPdfUrl(pdfUrls[selectedSemester] || "");
  };

  return (
    <div className="container12">
      {/* Semester Selection */}
      <div className="model-selector">
        <label>Select Semester Result: </label>
        <select value={selectedSemester} onChange={handleSemesterChange} className="select-input">
          {Object.keys(pdfUrls).map((semester) => (
            <option key={semester} value={semester}>
              {semester.replace("semester", "Semester ")}
            </option>
          ))}
        </select>
        <button onClick={handleShowResult} className="show-result-btn">Show Result</button>
      </div>

      {/* Google Drive PDF Viewer */}
      {pdfUrl && (
        <>
          <h3>{selectedSemester.replace("semester", "Semester ")} Result</h3>
          <iframe src={pdfUrl} width="100%" height="500px" allow="autoplay"></iframe>
        </>
      )}
    </div>
  );
};

export default SemesterPDFViewer;
