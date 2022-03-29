import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */
const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        items: [],
        totalAmount: 0
    },
    reducers: {
        addMeal(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push(newItem);
                state.totalAmount += 1;
            }          
        },
        removeMeal(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalAmount -= 1;
            }
        },
        editMeal(state, action){
            const editedItem = action.payload;
            const existingItem = state.items.find(item => item.id === editedItem.id);
            if(existingItem){
                existingItem.name = editedItem.name;
                existingItem.description = editedItem.description;
                existingItem.price = editedItem.price
            }
        }
    }
});
/* eslint-enable no-param-reassign */

export const mealsActions = mealsSlice.actions;
export default mealsSlice;