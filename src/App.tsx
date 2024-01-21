import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import FullBookInfo from './components/FullBookInfo';
import Results from './components/Results/Results';

function App() {

    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route path={'results'} element={<Results />} />
                    <Route path={'book'} element={<FullBookInfo />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
