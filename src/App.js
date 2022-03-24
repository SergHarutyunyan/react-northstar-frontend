import React from 'react';
import { NorthstarProvider, Button, ButtonGroup } from '@northstar/core';
import { makeStyles } from '@northstar/core/styles';
import Header from './Layout/Header';
import Meals from './components/Meals/Meals'

const useStyles = makeStyles({
    FetchFoods: {
        marginTop: 50,
        marginLeft: '50%'    
    },
});

function App() {
    const classes = useStyles();

    return (
        <>
            <Header />
            <NorthstarProvider dark>               
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" size="large" className={classes.FetchFoods}>
                    <Button style={{ width: 120 }}>Fetch</Button>
                    <Button style={{ width: 120 }}>Add New</Button>
                </ButtonGroup>
                <Meals />   
            </NorthstarProvider>
        </>
    );
}

export default App;
