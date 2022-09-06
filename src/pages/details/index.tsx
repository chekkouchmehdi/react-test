import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardContent, Typography } from '@mui/material';


const DetailsPage = () => {
    const post = {
        title: 'test',
        date: "2022-11-11",
        description: 'etzetzetzetzet zetzet zetzet zet zet zet ze tz etz et zet zetz etz'
    }
    return (
        <div>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} md={5} >
                    <Box sx={{ display: 'flex', mt: '20px', ml: '20px' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                        </CardContent>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DetailsPage;