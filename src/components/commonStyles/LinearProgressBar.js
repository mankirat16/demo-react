import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { keyframes } from "@mui/system";
import { Box, Typography } from "@mui/material";

const textClip = keyframes`
to {
  background-position: 200% center;
}
`;
const animationCharacter = {
  textTransform: "uppercase",
  backgroundImage: `linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  )`,
  backgroundSize: `auto auto`,
  backgroundClip: `border-box`,
  backgroundSize: `200% auto`,

  backgroundClip: `text`,
  textFillColor: `transparent`,
  "-webkit-background-clip": `text`,
  "-webkit-text-fill-color": "transparent",
  animation: `${textClip} 2s linear infinite`,
  fontSize: 20,
  textAlign: "center",
  display: "block",
};
export default function LinearProgressBar({ info = [], speed, loader }) {
  const [progress, setProgress] = React.useState(0);
  const PROGRESS_TOKEN = 5;
  const [resumeProgressText, setResumeProgressText] = React.useState(info[0]);
  const uploadTimer = React.useRef({ timeout: null, timeInterval: null });
  const [buffer, setBuffer] = React.useState(5);
  React.useEffect(() => {
    //   uploadTimer.current.timeout = setTimeout(() => {}, 70000);

    uploadTimer.current.timeInterval = setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress >= 100) {
          clearInterval(uploadTimer.current.timeInterval);
          return;
        }
        switch (currentProgress) {
          case 100: {
            clearInterval(uploadTimer.current.timeInterval);
            return;
          }
          case PROGRESS_TOKEN * 1: {
            setResumeProgressText(info[0]);
            break;
          }
          case PROGRESS_TOKEN * 5: {
            setResumeProgressText(info[0]);
            break;
          }
          case PROGRESS_TOKEN * 10: {
            setResumeProgressText(info[0]);
            break;
          }
          case PROGRESS_TOKEN * 15: {
            setResumeProgressText(info[0]);
            break;
          }
          case PROGRESS_TOKEN * 20: {
            setResumeProgressText(info[1]);
            break;
          }
          case PROGRESS_TOKEN * 25: {
            setResumeProgressText(info[1]);
            break;
          }
          case PROGRESS_TOKEN * 30: {
            setResumeProgressText(info[1]);
            break;
          }

          case PROGRESS_TOKEN * 35: {
            setResumeProgressText(info[1]);
            break;
          }

          case PROGRESS_TOKEN * 40: {
            setResumeProgressText(info[1]);
            break;
          }

          case PROGRESS_TOKEN * 45: {
            setResumeProgressText(info[1]);
            clearInterval(uploadTimer.current.timeInterval);
            break;
          }
        }
        return currentProgress + PROGRESS_TOKEN;
      });
      setBuffer((currentProgress) => {
        return currentProgress + PROGRESS_TOKEN;
      });
    }, speed);

    return () => {
      uploadTimer.current.timeout && clearTimeout(uploadTimer.current.timeout);
      uploadTimer.current.timeInterval &&
        clearInterval(uploadTimer.current.timeInterval);
    };
  }, []);
  return (
    <>
      <Typography
        sx={{
          ...animationCharacter,
        }}
      >
        {resumeProgressText}
      </Typography>
      <Box sx={{ width: "100%", height: "30px" }}>
        <LinearProgress
          color="success"
          variant="buffer"
          value={progress}
          sx={{ height: 7 }}
          valueBuffer={buffer}
        />
      </Box>
    </>
  );
}
