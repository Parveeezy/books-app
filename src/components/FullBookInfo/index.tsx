import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { BookFullInfoContainer, BookFullInfoWrapper } from './components';

const FullBookInfo = () => {

    const { books }: any = useSelector<RootState>(state => state.books);
    const bookId = useSelector<RootState>(state => state.getId.id);

    const book = books.filter((el: any) => el.id === bookId);

    console.log({ book });

    return (
        <BookFullInfoContainer>
            <BookFullInfoWrapper>
                <div>
                    {book.map((el: any) => {
                        return (
                            <div>
                                {el.id}
                            </div>
                        )
                    })}
                </div>
                <NavLink to={'/results'}>
                    Home
                </NavLink>
            </BookFullInfoWrapper>
        </BookFullInfoContainer>
    );
};

export default FullBookInfo;