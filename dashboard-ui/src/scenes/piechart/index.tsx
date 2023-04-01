import React from "react";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";

type Props = {};

const PieChartPage = (props: Props) => {
  return (
    <Box>
      <Header title="GEOGRAPHY CHART" subtitle="Geography data viz" />
      <Box height="75vh">
        <PieChart/>
      </Box>
    </Box>
  );
};

export default PieChartPage;