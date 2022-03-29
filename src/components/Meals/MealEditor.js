import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {TextField, Grid, GridItem, Button } from '@northstar/core';
import Modal from '../UI/Modal';
import {mealsActions} from '../../store/meals-slice';

const MealEditor = (props) => {
    const dispatch = useDispatch();

    const [nameVal, setName] = useState(props.currentMeal.name);
    const [descriptionVal, setDescription] = useState(props.currentMeal.description);
    const [priceVal, setPrice] = useState(props.currentMeal.price);

    const nameInputhandler = (event) => {
        setName(event.target.value);
    }

    const descriptionInputhandler = (event) => {
        setDescription(event.target.value);
    }

    const priceInputhandler = (event) => {
        setPrice(event.target.value);
    }

    const handleEditMeal = async () => {
        const item = {
            id: props.currentMeal.id,
            name: nameVal,
            description: descriptionVal,
            price: priceVal
        }

        await fetch(`https://redux-learn-46278-default-rtdb.firebaseio.com/meals/${props.currentMeal.dbKey}.json`, 
        { 
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch(mealsActions.editMeal(item));

        props.onClose();
    };

    return (
        <Modal onClose={props.onClose}>
        <form autoComplete="off" style={{ minWidth: 800 }}>
            <div style={{
                flexGrow: 1,
                padding: '16px',
                backgroundColor: '#f2f2f2'
            }}>
                <GridItem xs={12} >
                    <Grid justify="center" spacing={3}>
                        <GridItem>
                            <TextField required id="name" label="Name" onChange={nameInputhandler} value={nameVal}/>               
                        </GridItem>
                        <GridItem>
                            <TextField required id="price" label="Price" type="number" InputLabelProps={{ shrink: true }} onChange={priceInputhandler} value={priceVal} />     
                        </GridItem>
                        <GridItem>
                            <TextField id="description" label="Description" style={{ minWidth: 800 }} onChange={descriptionInputhandler} value={descriptionVal}/>
                        </GridItem>
                        <Button variant="contained" color="primary" style={{ width: 120 }} onClick={handleEditMeal}>Update</Button>
                    </Grid>                      
                </GridItem>
            </div>           
                          
        </form>
    </Modal>
    );
};

export default MealEditor;