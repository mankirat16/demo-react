import { Typography, Box, Button } from "@mui/material";
import * as React from "react";
import SolidButton from "../ui/SolidButton";
import { useNavigate } from "react-router-dom";
import { commonStyles } from "../commonStyles";
import AppBar from "../ui/header";
import { signIn } from "../ui/auth";
import Footer from "../ui/Footer";
import Lottie from "lottie-react";
import homePageAnimation from "../../utils/homePageAnimation.json";
function Body() {
  const navigate = useNavigate();
  const session = localStorage.getItem("session") || false;
  const [isLoggedIn, setIsLoggedIn] = React.useState(session);
  return (
    <Box>
      <AppBar />
      <Box marginLeft={10}>
        <Typography>.</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
          marginTop={15}
        >
          <Box width={"60%"}>
            <Typography
              variant="h2"
              style={{
                marginBottom: "20pt",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              Unlock Your Potential , Transforming Resumes into Career
              Success....!
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginBottom: "20pt",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              Check our state of the art resume checker and get instant Feedback
              on your resume !
            </Typography>
            <SolidButton
              onClick={() => {
                navigate("/check-resume-score");
              }}
              text={"check your resume"}
            />
            {!isLoggedIn ? (
              <Button
                variant="outlined"
                sx={commonStyles.outlinedButton}
                onClick={signIn}
              >
                LOG IN
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={commonStyles.outlinedButton}
                onClick={() => {
                  setIsLoggedIn(false);
                  localStorage.setItem("session", false);
                }}
              >
                LOG OUT
              </Button>
            )}
          </Box>
          <img
            src="/cover-pic.png"
            height={"550px"}
            style={{ marginTop: -70 }}
          />
        </Box>
        <Box
          maxWidth={1000}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Lottie
            animationData={homePageAnimation}
            style={{
              width: "120%",
            }}
          />
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins", fontWeight: "500" }}
          >
            Don't let your resume get lost in the 'black hole' of ATS systems.
            Use our tool to ensure it gets the attention it deserves from
            recruiters....!
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
export default Body;
