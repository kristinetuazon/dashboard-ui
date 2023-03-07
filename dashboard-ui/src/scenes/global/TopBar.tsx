// @ts-nocheck
import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DarkModeOutlined } from "@mui/icons-material";
import { NotificationsOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { PersonOutlineOutlined } from "@mui/icons-material";
import { Search } from "@mui/icons-material";

type Props = {};

const TopBar = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box className="flex justify-between p-2">
      <Box className="flex rounded-sm" backgroundColor={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <Search />
        </IconButton>
      </Box>
      <Box className="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode==="dark"?  <LightModeOutlinedIcon />: <DarkModeOutlined/>}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
