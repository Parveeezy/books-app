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
import { fetchBooks } from '../../redux/getBooksSlice/getBooksSlice';

const Results = () => {

    const booksArr: any = useSelector<RootState>(state => state.books);
    const dispatch = useDispatch<AppDispatch>();

    const getBooksData = (): void => {
        dispatch(fetchBooks());
    };

    return (
        <ResultsBlock>

            <button onClick={getBooksData}>fetch</button>
            <ResultsTitle>Found {booksArr.books.length} result</ResultsTitle>
            {booksArr.books.length ? (
                <ResultsItemsBlock>
                    {booksArr.books.map((el: any) => {
                        console.log(el);
                        return (
                            <ResultsCardItemWrapper key={el.id}>

                                <ResultCardItemImage
                                    img={el}
                                />

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
                        );
                    })
                    }
                </ResultsItemsBlock>) : ('нет книг')}


        </ResultsBlock>
    );
};

export default Results;