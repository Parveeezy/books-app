import React from 'react';
import {
    ResultCardItemAuthorName,
    ResultCardItemBookName,
    ResultCardItemCategory,
    ResultCardItemImage,
    ResultsBlock,
    ResultsCardItemWrapper,
    ResultsItemsBlock,
    ResultsTitle,
} from './components';

const Results = () => {

    const getBooks = (): Promise<void> => {
        dispatch => {
            return fetch('https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyAhdyJOku9x2e3Ndjzt0oOTdJyWrW06ecc')
                .then(response => response.json())
                .then(data => data);
        };
    };


    return (
        <ResultsBlock>
            <ResultsTitle>Found 446 result</ResultsTitle>
            <ResultsItemsBlock>

                <ResultsCardItemWrapper>
                    <ResultCardItemImage />

                    <ResultCardItemCategory>
                        Category
                    </ResultCardItemCategory>

                    <ResultCardItemBookName>
                        BookNameddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </ResultCardItemBookName>

                    <ResultCardItemAuthorName>
                        Pushkin
                    </ResultCardItemAuthorName>
                </ResultsCardItemWrapper>


            </ResultsItemsBlock>
        </ResultsBlock>
    );
};

export default Results;