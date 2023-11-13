import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    CategoriesType,
    selectCategories,
    selectSorting,
    SortingTextAndValueType,
    SortingType,
    ValuesAndTextType,
} from '../../../redux/selectSlice/selectSlice';
import { AppDispatch, RootState } from '../../../redux/store/store';
import {
    CustomMenuItem,
    CustomSelect,
    SelectsContainer,
    Title
} from './components';
import { setCategories } from '../../../redux/setCategoriesSlice/setCategoriesSlice';

const Selects = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categoriesArr: any = useSelector<RootState>(state => state.categories);
    const sortingArr: any = useSelector<RootState>(state => state.sorting);
    const booksArr: any = useSelector<RootState>(state => state.books)

    const [categoriesValue, setCategoriesValue] = useState<ValuesAndTextType>(categoriesArr[0].value);
    const [sortingValue, setSortingValue] = useState<SortingTextAndValueType>(sortingArr[0].value);

    const getTwoParamsForAction = (books: any, el: string) => {
        return { books, el }
    }

    const onClickCategoriesHandler = (el: CategoriesType): void => {
        setCategoriesValue(el.value);
        dispatch(selectCategories(el));
        dispatch(setCategories(getTwoParamsForAction(booksArr, el.value)))
    };

    const onClickSortingHandler = (el: SortingType): void => {
        setSortingValue(el.value);
        dispatch(selectSorting(el));
    };

    return (
        <SelectsContainer>
            <Title>Categories: &nbsp;</Title>
            <CustomSelect value={categoriesValue}>
                {categoriesArr.map((el: CategoriesType) => {
                    return (
                        <CustomMenuItem key={el.id} value={el.value}
                                        onClick={() => onClickCategoriesHandler(el)}>
                            {el.text}
                        </CustomMenuItem>
                    );
                })}
            </CustomSelect>&nbsp;

            <Title>Sorting by: &nbsp;</Title>
            <CustomSelect value={sortingValue}>
                {sortingArr.map((el: SortingType) => {
                    return (
                        <CustomMenuItem key={el.id} value={el.value}
                                        onClick={() => onClickSortingHandler(el)}>{el.text}</CustomMenuItem>
                    );
                })}
            </CustomSelect>
        </SelectsContainer>
    );
};

export default Selects;