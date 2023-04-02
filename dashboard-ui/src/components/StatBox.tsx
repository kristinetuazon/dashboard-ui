import React from 'react'
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from './ProgressCircle';

type Props = {
  title?: string,
  subtitle?: string,
  icon?: string,
  progress?: string,
  increase?: string,
}

function StatBox({}: Props) {
  return (
    <div>StatBox</div>
  )
}

export default StatBox