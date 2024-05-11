import * as React from "react";
import Button from "@mui/material/Button";
import { commonStyles } from "../commonStyles";
export default function SolidButton({ onClick, text }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={commonStyles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </Button>
  );
}
