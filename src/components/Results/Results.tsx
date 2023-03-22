import React from 'react';
import { ResultsBlock, ResultsItemsContainer, ResultsTitle } from './components';
import { Grid } from '@mui/material';

const Results = () => {
    return (
        <ResultsBlock>
            <ResultsTitle>Found 446 result</ResultsTitle>
            <ResultsItemsContainer>
                {/*<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>*/}
                {/*    /!*{Array.from(Array(6)).map((_, index) => (*!/*/}
                {/*        <Grid xs={2} sm={4} md={4} key={index}>*/}
                {/*            <Item>xs=2</Item>*/}
                {/*        </Grid>*/}
                {/*    /!*))}*!/*/}
                {/*</Grid>*/}

            </ResultsItemsContainer>
        </ResultsBlock>
    );
};

export default Results;