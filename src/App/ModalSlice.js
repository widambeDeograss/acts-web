// modalSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  modalType: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      console.log('====================================');
      console.log(action.payload);
      console.log('====================================');
      state.showModal = true;
      state.modalType = action.payload;
    },
    hideModal: (state) => {
      state.showModal = false;
      state.modalType = null;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const selectModal = (state) => ({
  showModal: state.modal.showModal,
  modalType: state.modal.modalType,
});

export default modalSlice.reducer;
