import React from 'react';
import { MenuItem, Select } from '@mui/material';

const Selects = () => {

    const categories = [
        {
            text: 'all',
            value: 'all',
        },
        {
            text: 'art',
            value: 'art',
        },
        {
            text: 'biography',
            value: 'biography',
        },
        {
            text: 'computers',
            value: 'computers',
        },
        {
            text: 'history',
            value: 'history',
        },
        {
            text: 'medical',
            value: 'medical',
        },
        {
            text: 'poetry',
            value: 'poetry',
        },
    ];

    return (
        <div>
            categories
            <Select>
                {categories.map(el => {
                    return (
                        <MenuItem value={el.value}>{el.text}</MenuItem>
                    );
                })}
            </Select>
        </div>
    );
};

export default Selects;