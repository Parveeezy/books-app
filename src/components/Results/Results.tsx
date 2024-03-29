import {
    ResultCardItemAuthorName,
    ResultCardItemBookName,
    ResultCardItemCategory,
    ResultCardItemImage,
    ResultCardItemNoImage,
    ResultCardText,
    ResultsBlock, ResultsCardImageBlock,
    ResultsCardItemWrapper,
    ResultsItemsBlock,
    ResultsTitle,
} from './components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getId } from '../../redux/getBookId/getBookIdSlice';
import ProgressBar from '../ProgressBar';

const Results = () => {
    const [isLoad, setIsLoad] = useState<boolean>(false);

    const booksArr: any = useSelector<RootState>(state => state.books);
    const dispatch = useDispatch<AppDispatch>();

    const getBookId = (el: MouseEvent) => {
        dispatch(getId(el));
    };

    useEffect(() => {
        setInterval(() => {
            setIsLoad(true);
        }, 1500);
    });

    return (
        <ResultsBlock>
            {
                isLoad ? (
                    booksArr.books?.length > 0 ? (
                                <>
                                    <ResultsTitle>Found {booksArr?.books?.length} result</ResultsTitle>
                                    <ResultsItemsBlock>
                                        {booksArr?.books.map((el: any) => {
                                            return (
                                                <ResultsCardItemWrapper key={el.id}>
                                                    <ResultsCardImageBlock>
                                                        {el.volumeInfo.imageLinks ? (
                                                            <ResultCardItemImage
                                                                img={el.volumeInfo.imageLinks.smallThumbnail}
                                                            />) : (
                                                            <ResultCardItemNoImage />
                                                        )}
                                                    </ResultsCardImageBlock>
                                                    <NavLink to={'/book'}>
                                                        <ResultCardText onClick={() => getBookId(el.id)}>
                                                            {el.volumeInfo.categories ? (
                                                                    <ResultCardItemCategory>
                                                                        {(el.volumeInfo.categories)}
                                                                    </ResultCardItemCategory>
                                                                )
                                                                : (
                                                                    <ResultCardItemCategory>
                                                                        Category not found
                                                                    </ResultCardItemCategory>
                                                                )}

                                                            <ResultCardItemBookName>
                                                                {(el.volumeInfo.title)}
                                                            </ResultCardItemBookName>
                                                            {el.volumeInfo.authors ? (
                                                                <ResultCardItemAuthorName>
                                                                    {(el.volumeInfo.authors[0])}
                                                                </ResultCardItemAuthorName>
                                                            ) : (
                                                                <ResultCardItemAuthorName>
                                                                    Author not found
                                                                </ResultCardItemAuthorName>)}
                                                        </ResultCardText>
                                                    </NavLink>
                                                </ResultsCardItemWrapper>

                                            );
                                        })
                                        }
                                    </ResultsItemsBlock>
                                </>
                            ) :
                            (
                                <h2>
                                    No books
                                </h2>
                            )
                ) : (
                        <ProgressBar/>
                )
            }
        </ResultsBlock>
    )
        ;
};

export default Results;