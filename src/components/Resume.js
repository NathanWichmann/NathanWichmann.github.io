import React from "react";
import { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core";
import pdfFile1 from "../pdf/Web-Developer-CV.pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Resume = () => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onchange event
  const [pdfFile, setPdfFile] = useState(pdfFile1);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(pdfFile1);

  // onchange event
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };

  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  return (
    <div className="h-full bg-gradient-to-b from-gray-200 to-gray-500">
      <div className="container">
        <h1 className="flex items-center justify-center py-3 px-3 mr-6 text-gray-400 hover:text-gray-600 text-4xl font-bold">
          {" "}
          Resume
        </h1>

        <br></br>

        <form className="form-group" onSubmit={handlePdfFileSubmit}>
          <input
            type="file"
            className="form-control"
            required
            onChange={handlePdfFileChange}
          />
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
          <br></br>
          <button type="submit" className="btn btn-success btn-lg">
            UPLOAD
          </button>
        </form>
        <br></br>
        <h4>View PDF</h4>
        <div className="pdf-container">
          {/* show pdf conditionally (if we have one)  */}
          {viewPdf && (
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={viewPdf}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}

          {/* if we dont have pdf or viewPdf state is null */}
          {!viewPdf && <>No pdf file selected</>}
        </div>
      </div>
    </div>
  );
};

export default Resume;
