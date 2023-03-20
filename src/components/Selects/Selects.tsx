import React, { useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesType, select, ValuesTypeAndText } from '../../redux/selectSlice/selectSlice';
import { AppDispatch, RootState } from '../../redux/store/store';

const Selects = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categoriesArr: any = useSelector<RootState>(state => state.select);

    const [value, setValue] = useState<ValuesTypeAndText>(categoriesArr[0].value);

    const onClickHandler = (el: CategoriesType) => {
        setValue(el.value);
        dispatch(select(el));
    };

    console.log(categoriesArr);

    return (
        <div>
            categories
            <Select value={value}>
                {categoriesArr.map((el: CategoriesType) => {
                    return (
                        <MenuItem key={el.id} value={el.value}
                                  onClick={() => onClickHandler(el)}>{el.text}</MenuItem>
                    );
                })}
            </Select>
        </div>
    );
};

export default Selects;