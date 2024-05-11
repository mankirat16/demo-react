import React from "react";
import Header from "./header";
import Footer from "../../ui/Footer";
import PdfReader from "../pdfReader";
import { Box } from "@mui/material";
const styles = {
  root: {
    flexDirection: 'column',
    display: "flex",
    marginLeft: "11%",
    marginRight: "11%",
  },
};
export default function CheckResume() {
  return (
    <Box>
      <Box sx={styles.root}>
        <Header />
        <PdfReader/>
      </Box>
      <Footer />
    </Box>
  );
}
