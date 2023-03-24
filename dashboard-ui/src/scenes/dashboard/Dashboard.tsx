import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="spaceBetween" alignItems="center">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
      </Box>
    </Box>
  )
}

export default Dashboard