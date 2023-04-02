import React from "react";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import GeoChart from "../../components/GeoChart";

type Props = {};

const GeographyChartPage = (props: Props) => {
  return (
    <Box>
      <Header title="GEOGRAPHY CHART" subtitle="Geography data viz" />
      <Box height="75vh">
        <GeoChart/>
      </Box>
    </Box>
  );
};

export default GeographyChartPage;
