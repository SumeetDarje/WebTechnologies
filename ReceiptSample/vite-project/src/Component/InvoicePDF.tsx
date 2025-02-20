import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    border: "1px solid #000",
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #000",
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    padding: 5,
    flex: 1,
    textAlign: "center",
  },
  tableCell: {
    padding: 5,
    flex: 1,
    textAlign: "center",
  },
  totalRow: {
    fontWeight: "bold",
  },
});


const InvoicePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.boldText}>Issued On</Text>
          <Text>Feb 19, 2025</Text>
        </View>
        <View>
          <Text style={styles.boldText}>Due On</Text>
          <Text>Feb 20, 2025</Text>
        </View>
      </View>

      {/* Sender & Receiver */}
      <View style={styles.section}>
        <Text style={styles.boldText}>From</Text>
        <Text>ACES TEAM</Text>
        <Text>RMD Sinhgad, Warje</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.boldText}>To</Text>
        <Text>Sumeet</Text>
        <Text>RMD Sinhgad, Warje</Text>
      </View>

      {/* Plan Details */}
      <View style={styles.section}>
        <Text style={styles.boldText}>Plan</Text>
        <Text>Basic Plan - Rs 69</Text>
      </View>

      {/* Table */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Description</Text>
          <Text style={styles.tableHeader}>Amount</Text>
          <Text style={styles.tableHeader}>Qty</Text>
          <Text style={styles.tableHeader}>Total Amount</Text>
        </View>
        {/* Table Row */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Basic Plan</Text>
          <Text style={styles.tableCell}>Rs 69</Text>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>Rs 69</Text>
        </View>
        {/* Total */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.totalRow]}>Total</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={[styles.tableCell, styles.totalRow]}>Rs 6969</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
