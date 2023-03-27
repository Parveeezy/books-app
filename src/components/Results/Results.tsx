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
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import React from 'react';


const Results = () => {
    const booksArr: any = useSelector<RootState>(state => state.books);

    return (
        <ResultsBlock>
            {booksArr.books.length > 0 ? (
                <>
                    <ResultsTitle>Found {booksArr.books.length} result</ResultsTitle>
                    <ResultsItemsBlock>
                        {booksArr.books.map((el: any) => {
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

                                    <ResultCardText>


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

                                </ResultsCardItemWrapper>
                            );
                        })
                        }
                    </ResultsItemsBlock>
                </>
            ) : (
                <h2>
                    No books
                </h2>
            )}
        </ResultsBlock>
    );
};

export default Results;