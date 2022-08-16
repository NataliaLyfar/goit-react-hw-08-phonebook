import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, action){
      state.value =  action.payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
