import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function PaginationComponent({ page, setPage, maxPages}) {

    const handleChangePage = (event, value) =>{
        setPage(value)
    }
    
    return (
    <Stack 
        spacing={2}
        sx={{
            margin: 'auto',
            marginTop: '3rem',
        }}
    >
        <Pagination siblingCount={0} count={maxPages} page={page} variant="outlined" color="secondary" size="medium" onChange={handleChangePage} />
    </Stack>
    )
}
