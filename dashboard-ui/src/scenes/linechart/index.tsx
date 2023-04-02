import React from "react";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";

type Props = {};

const LineChartPage = (props: Props) => {
  return (
    <Box>
      <Header title="LINE CHART" subtitle="Line data viz" />
      <Box height="75vh">
        <LineChart/>
      </Box>
    </Box>
  );
};

export default LineChartPage;
