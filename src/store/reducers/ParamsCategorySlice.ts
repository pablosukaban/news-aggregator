import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { paramsCategoryType } from '../../types';

const initialState: paramsCategoryType = {
    pageSize: 6,
    page: 1,
    q: null,
    country: 'us',
};

export const paramsCategorySlice = createSlice({
    name: 'paramsCategory',
    initialState,
    reducers: {
        changeQuery: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        },
        changeCurrentPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        changeCountry: (state, action: PayloadAction<string>) => {
            state.country = action.payload;
        },
    },
});

// export const selectParams = createSelector(
//     (state: RootState) => state.params,
//     (params) => params
// );
