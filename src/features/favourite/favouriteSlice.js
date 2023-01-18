import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        favouriteFiles:[]
    },
    reducers: {
        setFavourite: (state,action) => {
            state.favouriteFiles = action.payload
        }
    }
})

export const { setFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;