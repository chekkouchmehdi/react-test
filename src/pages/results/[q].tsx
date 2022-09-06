import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import { Results } from '../../components/results';
import { useRouter } from 'next/router'
import axios from 'axios';

const ResultsPage = () => {
    const router = useRouter()
    const [results, setResults] = useState([])
    const { q } = router.query

    useEffect(() => {
        if (q) {
            let config = {
                method: 'get',
                url: `https://api.foursquare.com/v3/places/search?query=${q}`,
                headers: {
                    'Authorization': 'fsq3W5Z5AmsX+OoknZnxbWsXIg01uUhfzjxiSrdqec/eqX0='
                }
            };
            axios(config).then((response: any) => {
                setResults(response.data.results);
            });
        }
    }, [q]);

    return (
        <Container fixed>
            <Box sx={{ height: '100px' }}>
                <Navbar />
                {results && results.map((element: any) => {
                    <Results link={element.link} name={element.name} adr={element.location.formatted_address} />
                })}
                <Footer />
            </Box>
        </Container>
    );
};



export default ResultsPage;