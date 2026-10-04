import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection', // Fixed typo from 'nmae'
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id == action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items));
                toast.success('Added To Collection');
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items));
            toast.error('Removed From Collection');
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
            toast.info('Collection Cleared');
        },
    }
})

export const {
    addCollection,
    removeCollection,
    clearCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;