import * as React from "react";
import { Link, Typography, Box } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import { commonStyles } from "../commonStyles";
function Footer() {
  const baseUrl = "https://";
  const bgColor ="#1F2833";
  const socialIcons = ["instagram", "facebook", "gmail", "x"];
  return (
    <Box style={commonStyles.footer}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body2">COMPANY</Typography>
        <Link href="#" underline="hover" color={"white"}>
          Get in Touch
        </Link>
        <Link href="#" underline="hover" color={"white"}>
          Careers
        </Link>
        <Link href="#" underline="hover" color={"white"}>
          Email
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {socialIcons.map((platform, index) => {
          return (
            <SocialIcon
              url={`${baseUrl}/${platform}.com`}
              bgColor={bgColor}
              style={commonStyles.socialIcons}
              key={index}
            />
          );
        })}
      </Box>
    </Box>
  );
}
export default Footer;
