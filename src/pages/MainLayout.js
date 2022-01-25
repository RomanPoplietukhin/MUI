import React from 'react';
import { Card, Filters } from '../components'
import {  Box, createTheme } from '@mui/system'

const theme = createTheme({
  breakpoints: {
    values: {
        mobile: 0,
        tablet: 678,
        laptop: 1024,
        desktop: 1200,
    }
  },
  palette: {
      mode: 'dark',
      background: {
          default: '#000',
          paper: '#950101'
      },
      text: {
        main:'#fff',
      },
      action: {
        hover: '#3D0000'
      }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    fontSize: 14,

  },
  spacing : 0,
  shape: {
    borderRadius: '18px'
  }
})

export function MainLayout() {
    return (
      <Box sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        height: '100vh',
        py: theme.spacing(3),
        px: theme.spacing(3),
      }}>
        <Filters theme={ theme }/>
        <Box sx={{
          display: 'flex',
          width: 1,
          my: theme.spacing(3),
        }}>
          <Card theme={ theme } />
          <Card theme={ theme } />
          <Card theme={ theme } />
          <Card theme={ theme } />
        </Box>
      </Box>
    );
}
