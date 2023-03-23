import React,{useState} from "react";
import SideBar from "../scenes/global/SideBar";
import TopBar from "../scenes/global/TopBar";
import { Box } from "@mui/material";

type Props = { children: JSX.Element };

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div>
    <Box sx={{display:"flex", flexDirection:"row",}}>
      <TopBar/>
    <SideBar/>
    </Box>
        {children}

    
    </div>
  );
};

export default Layout;
