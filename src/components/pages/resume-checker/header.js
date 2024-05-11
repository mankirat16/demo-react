import { Box, Typography } from "@mui/material";
import React from "react";
const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};
export default function Header() {
  return (
    <Box marginTop={"95pt"} width={"100%"} sx={styles.root}>
      <Box maxWidth={"45%"} padding={5}>
        <Typography variant="h4" fontWeight={500}>
          The most advanced resume checker, powered by AI
        </Typography>
        <Typography variant="body1" marginTop={5} fontWeight={"500"}>
          Score My Resume goes beyond basic spell checking and uses leading
          Artificial Intelligence technology to grade your resume on 20+ resume
          checks that recruiters and hiring managers pay attention to.
        </Typography>
        <Typography variant="body1" marginTop={5} fontWeight={"500"}>
          Specifically, the platform analyzes your resume's impact by evaluating
          the strength of your word choice, and also checks your resume's style
          and brevity. Similarly, it also scores each of the bullet points on
          your resume and checks for key elements such as inconsistencies,
          length, word choice, filler words, keywords and buzzwords.
        </Typography>
      </Box>
      <Box maxWidth={"50%"}>
        <img src="/resume-check-page-media.png" width={"100%"} />
      </Box>
    </Box>
  );
}
