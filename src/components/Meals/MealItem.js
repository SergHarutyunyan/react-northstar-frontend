import React from "react";
import { IconButton } from "@northstar/core";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import TableCell from '@northstar/core/TableCell';

const MealItem = (props) => {

    const meal = {
        name: props.name,
        description: props.description,
        price: props.price
    };

 return (
    <>
        <TableCell key={props.id} >
            {meal.name}          
        </TableCell>
        <TableCell key={props.id} >
            {meal.description}          
        </TableCell>
        <TableCell key={props.id}>
            ${meal.price.toFixed(2)}                     
        </TableCell>
        <TableCell key='edit'>
            <IconButton edge="end" size="small" color="inherit" onClick={props.onShowEditor} >           
                <EditIcon />                           
            </IconButton>                   
        </TableCell>
        <TableCell key='delete'>
            <IconButton edge="end" size="small" color="inherit">           
                <DeleteRoundedIcon />                           
            </IconButton>                 
        </TableCell>     
    </>   
    );
};

export default MealItem;