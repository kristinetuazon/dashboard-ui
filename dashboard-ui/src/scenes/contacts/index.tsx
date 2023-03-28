import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";

type Props = {};

const Team = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex:"0.5" },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex">
        <Header title="TEAM" subtitle="Team management"></Header>
      </Box>
      <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none"
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none"
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderColor: "none"
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer":{
          backgroundColor: colors.blueAccent[700],
          borderColor: "none"
        }
      }}
      >
      <DataGrid rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;