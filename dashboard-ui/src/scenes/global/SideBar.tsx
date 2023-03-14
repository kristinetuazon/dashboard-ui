import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/sidebar.css'
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { SidebarMenuItem } from "../../types/global";
import { LightModeOutlined } from "@mui/icons-material";
import { HomeOutlined } from "@mui/icons-material";
import { PeopleOutlineOutlined } from "@mui/icons-material";
import { ContactsOutlined } from "@mui/icons-material";
import { ReceiptOutlined } from "@mui/icons-material";
import { PersonOutlined } from "@mui/icons-material";
import { CalendarTodayOutlined } from "@mui/icons-material";
import { HelpOutlineOutlined } from "@mui/icons-material";
import { BarChartOutlined } from "@mui/icons-material";
import { PieChartOutline } from "@mui/icons-material";
import { TimelineOutlined } from "@mui/icons-material";
import { MenuOutlined } from "@mui/icons-material";
import { MapOutlined } from "@mui/icons-material";

type Props = {};

const SideBar = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("dashboard");

  const item = (value: SidebarMenuItem) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <MenuItem
        active={value.selected === value.title}
        style={{ color: colors.grey[100] }}
        onClick={() => {
          setSelected(value.title);
        }}
        icon={value.icon}
      >
        <Typography></Typography>
        <Link to={value.to} />
      </MenuItem>
    );
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-sidebar-wrapper": {
          backgroundColor: `transparent`,
        },
        "& pro-inner-item": {
          padding: "5px",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar defaultCollapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={() => {
                    setIsCollapsed(!isCollapsed);
                  }}
                >
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  // src={}
                  style={{cursor: "pointer", borderRadius:"50%"}}
                />
              </Box>

              <Box>
                <Typography>Kristine</Typography>
                <Typography>Awesome Frontend Engineer</Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
