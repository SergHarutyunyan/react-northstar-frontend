import React, { useEffect, useState } from 'react';
import { NorthstarProvider, Button } from '@northstar/core';
import { makeStyles } from '@northstar/core/styles';
import { useSelector } from 'react-redux';
import Header from './Layout/Header';
import Meals from './components/Meals/Meals'

import MealAdd from './components/Meals/MealAdd';

const useStyles = makeStyles({
    FetchFoods: {
        marginTop: 50,
        marginLeft: '50%',
        width: 100    
    },
});

function App() {
    const classes = useStyles();
    
    const mealItems = useSelector((state) => state.meals.items);
    const total = useSelector((state) => state.meals.totalAmount);
    const [foods, setMeals] = useState([]);
    const [showMealsAdd, setShowMealsAdd] = useState(false)

    const showMealsAddHandler = () => {
        setShowMealsAdd(true);
    }
    
    const hideMealsAddHandler = () => {
        setShowMealsAdd(false);
    }

    useEffect(async () => {
        const response = await fetch('https://redux-learn-46278-default-rtdb.firebaseio.com/meals.json', {
            method: 'PUT',
            body: JSON.stringify(mealItems),
            headers: {
                'Content-Type' : 'application/json'
            }
        });          
        const data = await response.json();

        if(data) 
        {
            const itemArrays = Object.entries(data);

            const items = itemArrays.map((item) => {
                return {
                    dbKey: item[0],
                    id: item[1].id,
                    name: item[1].name,
                    description: item[1].description,
                    price: item[1].price
                };
            });          
            
            setMeals(items);  
            console.log(mealItems);
        }
    }, [mealItems,total])


    return (
        <>
            <Header />
            {showMealsAdd && <MealAdd onClose={hideMealsAddHandler}/>}
            <NorthstarProvider>                               
                <Button variant="contained" color="primary" className={classes.FetchFoods} onClick={showMealsAddHandler}>Add New</Button>            
                <Meals meals={foods}/>   
            </NorthstarProvider>
        </>
    );
}

export default App;
