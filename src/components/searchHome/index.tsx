import React from 'react';
import Image from 'next/image'
import SearchInputBase from '../search';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';

export const SearchHome = () => (
    <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        sx={{
            mt: '40px'
        }}
    >
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
        >
            <Image
                width={300}
                height={100}
                title="Logo"
                alt=""
                src='/logo.png'
            />
            <Grid
                item
                sx={{
                    width: '70%'
                }}
            >
                <SearchInputBase />
            </Grid>
        </Stack>
    </Grid>
);