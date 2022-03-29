import React from 'react';
import { useDispatch } from 'react-redux';
import {Grid, GridItem, Button } from '@northstar/core';
import Modal from '../UI/Modal';
import {mealsActions} from '../../store/meals-slice';

const MealDelete = (props) => {
    const dispatch = useDispatch();

    const handleDeleteMeal = async () => {
        await fetch(`https://redux-learn-46278-default-rtdb.firebaseio.com/meals/${props.currentMeal.dbKey}.json`, 
        { 
            method: 'Delete'
        });

        console.log(props.currentMeal.id);
        dispatch(mealsActions.removeMeal(props.currentMeal.id));

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
                Are you sure you want to delete that food??
                <GridItem xs={12} >
                    <Grid justify="center" spacing={3}>                 
                        <Button variant="contained" color="primary" style={{ width: 120 }} onClick={handleDeleteMeal}>Yes</Button>
                        <Button variant="contained" color="primary" style={{ width: 120 }} onClick={props.onClose}>No</Button>
                    </Grid>                      
                </GridItem>
            </div>           
                          
        </form>
    </Modal>
    );
};

export default MealDelete;