import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { paramsEverythingType } from '../../types';

const initialState: paramsEverythingType = {
    sortBy: 'publishedAt',
    pageSize: 12,
    page: 1,
    q: 'bitcoin',
    language: 'en',
};

export const paramsEverythingSlice = createSlice({
    name: 'paramsEverything',
    initialState,
    reducers: {
        changeQuery: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        },
        changeCurrentPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
    },
});

// export const selectParams = createSelector(
//     (state: RootState) => state.params,
//     (params) => params
// );
