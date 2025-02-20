import React from 'react';
import { Document, Page ,Text } from '@react-pdf/renderer';

const BillPdf = () => {
  return (
    <Document>
        <Page size={'A4'}>
            <Text>
                Hello World!
            </Text>
        </Page>
    </Document>
  )
}

export default BillPdf
