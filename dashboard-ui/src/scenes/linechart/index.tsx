import React from "react";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";

type Props = {};

const LineChartPage = (props: Props) => {
  return (
    <Box>
      <Header title="GEOGRAPHY CHART" subtitle="Geography data viz" />
      <Box height="75vh">

      </Box>
    </Box>
  );
};

export default LineChartPage;
