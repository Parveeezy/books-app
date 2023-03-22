import React from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer/SearchContainer';
import Results from './components/Results/Results';

function App() {

    return (
        <div className='App'>
            <SearchContainer/>
            <Results/>
        </div>
    );
}

export default App;
