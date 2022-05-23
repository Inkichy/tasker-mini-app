import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        activeModal: 'newTask',
        modalHistory: []
    },
    reducers: {
        setActiveModal: (state, action) => {
            state.activeModal = action.payload;
        },
        removeActiveModal: state => {
            state.activeModal = null;
        }
    }
})

export const { setActiveModal, removeActiveModal } = modalSlice.actions;

export default modalSlice.reducer