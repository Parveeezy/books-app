import React, { ChangeEvent, FC, SetStateAction, useState } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesArrayType, CategoriesType } from '../../redux/selectSlice/selectSlice';
import { AppDispatch, RootState } from '../../redux/store/store';
import { v4 } from 'uuid';

const Selects = () => {

    const dispatch: AppDispatch = useDispatch();
    const categories: any = useSelector<RootState>(state => state.select);

    const [value, setValue] = useState<CategoriesType>({ id: v4(), value: 'all', text: 'all' });

    const onChangeHandler = (event: SelectChangeEvent) => {
        console.log(event.target.value as string);
    };

    const onClickHandler = (el: CategoriesType) => {
        setValue(el)
    };

    return (
        <div>
            categories
            <Select >
                {categories.map((el: CategoriesType) => {
                    return (
                        <MenuItem key={el.id} value={el.value} onClick={() => onClickHandler(el.value)}>{el.text}</MenuItem>
                    );
                })}
            </Select>
        </div>
    );
};

export default Selects;