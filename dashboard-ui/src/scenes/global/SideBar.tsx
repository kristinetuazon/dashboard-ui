import React, { useState, FormEvent } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/sidebar.css'
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { SidebarMenuItem } from "../../types/global";
import { Home, LightModeOutlined } from "@mui/icons-material";
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
import picture from "./../../assets/IMG_4103.jpeg"
import "./SideBar.css"

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const SideBar = (props: Props) => {
  const { children } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("dashboard");

  const Item = (value: SidebarMenuItem) => {
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
        <Typography>{value.title}</Typography>
        <Link to={value.to} />
      </MenuItem>
    );
  };

  return (
    <div className="sideBar">
    <Box
      // sx={{
      //   "& .pro-sidebar-inner": {
      //     background: `${colors.primary[400]} !important`,
      //   },
      //   "& .pro-sidebar-wrapper": {
      //     backgroundColor: `transparent`,
      //   },
      //   "& pro-inner-item": {
      //     padding: "5px",
      //   },
      //   "& .pro-inner-item:hover": {
      //     color: "#868ddb !important",
      //   },
      //   "& .pro-menu-item.active": {
      //     color: "#6870fa !important",
      //   },
      // }}
    >
      <Sidebar backgroundColor={colors.primary[400]} defaultCollapsed={isCollapsed}>
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
                  SAMPLE
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
                  src={picture}
                  style={{ cursor: "pointer", borderRadius: "70%" }}
                />
              </Box>

              <Box>
                <Typography>Kristine</Typography>
                <Typography>Awesome Frontend Engineer</Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
            )}
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
            )}
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
            )}
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutline />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
    </div>
  );
};

export default SideBar;
