// import PDFButton from "../components/PDFButton";

// export default function HomePage() {
//   return (
//     <div className="text-center mt-3">
//       <h1>Invoice Page</h1>
//       <PDFButton />
//     </div>
//   );
// }

"use client";
import React from "react";
import dynamic from "next/dynamic";
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
  }
);
import InvoicePDF from "../components/InvoicePDF";

const App = () => {
  return (
    <div className="text-center mt-3">
      <h1>Invoice Generator</h1>
      <PDFDownloadLink document={<InvoicePDF />} fileName="invoice.pdf">
        {({ loading }) => (loading ? "Loading..." : "Download Invoice")}
      </PDFDownloadLink>
    </div>
  );
};

export default App;


