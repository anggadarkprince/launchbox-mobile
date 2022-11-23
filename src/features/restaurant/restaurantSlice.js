import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  activeRestaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.activeRestaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRestaurant} = restaurantSlice.actions;

export default restaurantSlice.reducer;
