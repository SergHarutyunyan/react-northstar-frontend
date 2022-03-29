import { configureStore } from '@reduxjs/toolkit';
import mealsSlice from './meals-slice';

const store = configureStore({
    reducer: { meals: mealsSlice.reducer }
});

export default store;