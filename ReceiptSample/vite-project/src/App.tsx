// import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "./Component/InvoicePDF";
// import EventSchema from ".Events/Create";

const App = () => {
  return (
    <div>
      <h1>Invoice Generator</h1>
      <PDFDownloadLink document={<InvoicePDF />} fileName="invoice.pdf">
        {({ loading }) => (loading ? "Loading..." : "Download Invoice")}
      </PDFDownloadLink>
      {/* <EventSchema/> */}
    </div>
  );
};

export default App;