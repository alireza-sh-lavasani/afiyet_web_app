import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Loading = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
    >
      <CircularProgress size={60} />
      <Typography 
        variant="h6" 
        component="div" 
        marginTop={2}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
