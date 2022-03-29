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
        <TableCell key='name'>
            {meal.name}          
        </TableCell>
        <TableCell key='desc'>
            {meal.description}          
        </TableCell>
        <TableCell key='price'>
            ${meal.price}                     
        </TableCell>
        <TableCell key='edit'>
            <IconButton edge="end" size="small" color="inherit" onClick={props.onShowEditor} >           
                <EditIcon />                           
            </IconButton>                   
        </TableCell>
        <TableCell key='delete'>
            <IconButton edge="end" size="small" color="inherit" onClick={props.onDelete}>           
                <DeleteRoundedIcon />                           
            </IconButton>                 
        </TableCell>     
    </>   
    );
};

export default MealItem;