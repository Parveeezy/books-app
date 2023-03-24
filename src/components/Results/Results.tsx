import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import axios from 'axios';
import { getBooks, getBooksReducer } from '../../redux/getBooksSlice/getBooksSlice';

const Results = () => {

    const [books, setBooks] = useState();
    const booksArr: any = useSelector<RootState>(state => state.books);

    const fetchBooks = (a: any) => async (dispatch: AppDispatch) => {
        const a = await axios.get('https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyAhdyJOku9x2e3Ndjzt0oOTdJyWrW06ecc')
            .then((response) => dispatch((response.data.items)));

        setBooks(a);
    };

    console.log(booksArr);

    return (
        <ResultsBlock>

            <button onClick={() => fetchBooks(books)}>fetch</button>
            <ResultsTitle>Found 446 result</ResultsTitle>
            <ResultsItemsBlock>

                <ResultsCardItemWrapper>
                    <ResultCardItemImage />

                    <ResultCardItemCategory>
                        Category
                    </ResultCardItemCategory>

                    <ResultCardItemBookName>
                        name
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