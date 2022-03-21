import React from 'react';
import { NorthstarProvider } from '@northstar/core';
import Header from './Layout/Header';
import Meals from './components/Meals/Meals'

function App() {
    return (
        <>
            <Header />
            <NorthstarProvider dark>   
                <Meals />   
            </NorthstarProvider>
        </>
    );
}

export default App;
