import React, {useState} from 'react'
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar'
// import 'react-pro-sidebar/dist/css/sidebar.css'
import { Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from 'react-router-dom';
import { tokens } from '../../theme';
import { LightModeOutlined } from '@mui/icons-material';
import { HomeOutlined } from '@mui/icons-material';
import { PeopleOutlineOutlined } from '@mui/icons-material';
import { ContactsOutlined } from '@mui/icons-material';
import { ReceiptOutlined } from '@mui/icons-material';
import { PersonOutlined } from '@mui/icons-material';
import { CalendarTodayOutlined } from '@mui/icons-material';
import { HelpOutlineOutlined } from '@mui/icons-material';
import { BarChartOutlined } from '@mui/icons-material';
import { PieChartOutline } from '@mui/icons-material';
import { TimelineOutlined } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
import { MapOutlined } from '@mui/icons-material';

type Props = {}

const SideBar = (props: Props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [selected, setSeleted] = useState<string>("dashboard");

  return (
    <Box
    //  sx={{
    //     "& .pro-sidebar-inner": {
    //         background: `${colors.primary[400]} !important`
    //     },
    //     "& .pro-sidebar-wrapper": {
    //         backgroundColor: `transparent`
    //     },
    //     "& pro-inner-item": {
    //         padding: '5px'
    //     },
    //     "& .pro-inner-item:hover": {
    //         color: "#868dfb !important"
    //     },
    //      "& .pro-menu-item.active": {
    //         color: "#6870fa !important"
    //     },
        
    // }}
    >

    </Box>
  )
}

export default SideBar