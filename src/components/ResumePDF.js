import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./Resume";

const ResumePDF = () => (
  <PDFViewer width="1000" height="1000">
    <Resume />
  </PDFViewer>
);

// ReactDOM.render(<Blah />, document.getElementById("pdf"));

export default ResumePDF;
