import React from "react";
import Resume from "./components/Resume";
import ResumePDF from "./components/ResumePDF";
import ReactDOM from "react-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = props => {
  return (
    <>
      <p>Hello World</p>
      <PDFDownloadLink document={<Resume />} filename="waz.pdf">
        <div>Download</div>
      </PDFDownloadLink>
      <ResumePDF />
      <p>heythere!</p>
    </>
  );
};

export default App;
