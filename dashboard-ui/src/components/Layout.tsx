import React from "react";
import SideBar from "../scenes/global/SideBar";
import TopBar from "../scenes/global/TopBar";

type Props = { children: JSX.Element };

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <TopBar/>
        <SideBar/>
        {children}

    
    </div>
  );
};

export default Layout;
