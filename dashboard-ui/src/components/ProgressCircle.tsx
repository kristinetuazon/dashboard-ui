import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

type Props = {
  progress?: string;
  size?: string;
};

const ProgressCircle = ({ progress = "0.75", size = "40" }:Props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = Number(progress) * 350;


  return (
    <Box
    sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
        conicGradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg, ${colors.greenAccent[500]} ${angle}deg 360)`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
    }}>

    </Box>
  )
};

export default ProgressCircle;
 