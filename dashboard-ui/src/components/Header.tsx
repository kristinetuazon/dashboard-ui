import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme';

type Props = {
  title?: string,
  subtitle?: string,
}

const Header = (props: Props) => {
  const {title, subtitle} = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" display="flex" flexDirection="column">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{mb: "5px"}}>{title}</Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>{subtitle}</Typography>
    </Box>
  )
}

export default Header