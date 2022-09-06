import * as React from 'react';
import { useRouter } from 'next/router'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInputBase() {
    const [requestSearch, setRequestSearch] = React.useState('');
    const router = useRouter()


    const onChange = (event: any) => {
        setRequestSearch(event.target.value)
    };

    const searchRequest = () => {
        if (requestSearch.length) {
            router.push(`/results/${requestSearch}`)
        }
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search ..."
                onChange={onChange}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={searchRequest}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
