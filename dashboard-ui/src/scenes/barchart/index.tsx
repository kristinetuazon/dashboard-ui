import React from "react";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";
import { Box } from "@mui/material";

type Props = {};

const BarChartComponent = (props: Props) => {
  return (
    <Box>
      <Header title="BAR CHART" subtitle="BarChart data Viz" />
    </Box>
  );
};

export default BarChartComponent;
