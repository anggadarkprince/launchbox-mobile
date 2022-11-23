import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './src/features/basket/baseketSlice';
import restaurantReducer from './src/features/restaurant/restaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
