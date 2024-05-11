import * as React from "react";
import { useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SolidButton from "./SolidButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { useNavigate, useLocation } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "55pt",
    position: "fixed",
    backgroundColor: "white",
    transition: "background-color 0.8s, box-shadow 0.3s",
    boxShadow: "none",
  },
  left: {
    marginLeft: "20px",
  },
  logo: {
    width: "170px",
    height: "auto",
    cursor: "pointer",
  },
  right: {
    marginLeft: "auto",
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    marginRight: "10px",
  },
  menuItem: {
    marginLeft: "15px",
    marginRight: "15px",
    cursor: "pointer",
    transition: "color 0.3s",
    padding: "2pt",
    fontSize: "14px",
    borderRadius: "4pt",
    "&:hover": {
      backgroundColor: "#EAEAEA",
      transition: "0.3s",
      cursor: "pointer",
    },
  },
  divider: {
    marginLeft: "15px",
    marginRight: "15px",
    backgroundColor: "#ccc",
  },
};

export default function AppBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100; // Adjust this threshold as needed

    if (scrollPosition > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pages = [
    { name: "BLOGS", route: "/blogs" },
    { name: "COURSES", route: "/courses" },
    { name: "ABOUT US", route: "/about-us" },
  ];

  return (
    <Box
      style={{
        ...styles.root,
        backgroundColor:
          !isHomePage || scrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0)",
        boxShadow:
          !isHomePage || scrolled ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none",
      }}
    >
      <Box style={styles.left}>
        <img
          src={require("file:///C:/Users/Dell/Desktop/CODING/Integrated%20Project/ats-checker-frontend/src/utils/careerGateLogo.png")}
          style={styles.logo}
          alt="Career Gate Logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </Box>
      {!fullScreen && (
        <Box style={styles.right}>
          {pages.map((page, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={styles.menuItem}
              onClick={() => navigate(page.route)}
            >
              {page.name}
            </Typography>
          ))}
          <Divider orientation="vertical" flexItem style={styles.divider} />
          <SolidButton
            onClick={() => {
              navigate("/check-resume-score");
            }}
            text={"Check Resume"}
            size="small"
          />
        </Box>
      )}
      {fullScreen && (
        <IconButton
          color="primary"
          aria-label="menu"
          sx={styles.menuButton}
          onClick={() => {
            // Handle opening of mobile menu
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </Box>
  );
}
