import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

import './App.css'
import BillPdf from './Component/BillPdf'

function App() {

  return (
    <>
    <PDFViewer style={{width:'100%',height:'700px'}} >
      <BillPdf></BillPdf>
    </PDFViewer>
    </>
  )
}

export default App
