import { Box, Container } from '@mui/material';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { Footer } from '../components/footer';
import { SearchHome } from '../components/searchHome';

const Home: NextPage = () => {
  return (
    <Container fixed>
      <Box sx={{
        height: '100px',
        paddingTop: '30%'
      }}>
        <SearchHome />
        <Footer />
      </Box>
    </Container>
  );
}

export default Home
