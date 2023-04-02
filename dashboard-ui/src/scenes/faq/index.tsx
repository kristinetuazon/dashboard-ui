import React from "react";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";

type Props = {};

const FAQ = (props: Props) => {
  return (
    <Box>
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Box height="75vh">

      </Box>
    </Box>
  );
};

export default FAQ;
