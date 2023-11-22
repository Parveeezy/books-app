import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchContainer from '../SearchContainer/SearchContainer';


const Layout = () => {
    return (
        <>
            <SearchContainer />
            <Outlet />
        </>
    );
};

export { Layout };