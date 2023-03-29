import React, { ChangeEvent, KeyboardEvent } from 'react';
import { CustomInpt } from './components';

export type CustomInputType = {
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    value: string
}

const CustomInput = (props: CustomInputType) => {

    return (
        <>
            <CustomInpt
                onChange={props.onChangeValue}
                onKeyDown={props.onKeyDownHandler}
                value={props.value}
                fullWidth
                label='Search books...'
                id='fullWidth' />
        </>
    );
};

export default CustomInput;