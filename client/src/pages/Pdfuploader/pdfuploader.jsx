import React, { useState } from "react";

const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Uploaded:", result);
      alert("PDF uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload PDF.");
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPDF;
