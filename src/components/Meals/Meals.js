import React from "react";
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@northstar/core";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
];

const Meals = () => {

    const fff = () => {
        console.log('asd');
    }

    const aaa = () => {
        console.log('aaa');
    }

    const bbb = () => {
        console.log('bbb');
    }

    return ( 
            <List>
                {DUMMY_MEALS.map(meal => 
                    <ListItem key={meal.id} role={undefined} dense button onClick={fff}>
                    <ListItemText id={meal.id} primary={meal.name} />
                    <ListItemSecondaryAction>       
                        <IconButton edge="end" size="small" color="inherit" onClick={aaa}>           
                            <DeleteRoundedIcon />                           
                        </IconButton>     
                        <IconButton edge="end" size="small" color="inherit" onClick={bbb}>           
                            <EditIcon />                           
                        </IconButton>            
                    </ListItemSecondaryAction>
                 </ListItem>
                )}              
            </List>
    );
};

export default Meals;

