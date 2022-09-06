import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => (
    <Box
        sx={{
            display: 'flex',
            padding: '10px',
            marginTop: '10px',
            borderTop: '1px solid #eaeaea',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            Developed by Mehdi Chekkouch
        </Typography>
    </Box>
);