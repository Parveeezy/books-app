import React from 'react';
import { CustomInpt, CustomInptType } from './components';

export type CustomInputType = {
    onChangeValue: (e: string) => void
    onKeyDownHandler: (e: string) => void
    value: string
}

const CustomInput = ({ onChangeValue, value, onKeyDownHandler }: CustomInputType) => {

    return (
        <>
            <CustomInpt
                onChange={onChangeValue}
                onKeyDown={onKeyDownHandler}
                value={value}
                fullWidth
                label='Search books...'
                id='fullWidth' />
        </>
    );
};

export default CustomInput;