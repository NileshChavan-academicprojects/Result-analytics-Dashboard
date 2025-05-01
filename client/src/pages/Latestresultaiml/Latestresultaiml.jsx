import React, { useState } from "react";
import "./Latestresultaiml.scss"; // Custom SCSS for styling

// Google Drive PDF URLs (Updated for preview mode)
const pdfUrls = {
  semester3: "https://drive.google.com/file/d/1-_T0CrmY-aJ0bX7uUSjD3qsEvhfQSlCf/preview",
  semester4: "https://drive.google.com/file/d/1n4OPPJysixFMF3RTHdHJpYFVl56mNvEH/preview",
  semester5: "https://drive.google.com/file/d/1tfY_v6s5Mrx-NJ_C-NAZK-HkKixe_sj5/preview", 
  semester6: "https://drive.google.com/file/d/1VyCLHYMBLdQG1qZQVdb_4wGtmpbHGCjD/preview", 
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
