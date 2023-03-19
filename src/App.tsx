import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import CustomInput from './components/CustomInput/CustomInput';
import Selects from './components/Selects/Selects';

function App() {


    return (
        <div className='App'>
            <Container>
                <CustomInput />
                <Selects />
            </Container>
        </div>
    );
}

export default App;
